// Post-build step: pre-render each route to real HTML so crawlers and AI agents
// get per-route content and metadata without executing JavaScript.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join } from 'node:path'
import puppeteer from 'puppeteer-core'

const DIST = process.env.PRERENDER_DIST ?? new URL('../dist/', import.meta.url).pathname
const ROUTES = [
  '/',
  '/features',
  '/providers',
  '/pricing',
  '/self-host',
  '/changelog',
  '/privacy',
  '/terms',
  '/404',
]
const PORT = 4178
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
}

const server = createServer(async (req, res) => {
  const path = decodeURIComponent((req.url ?? '/').split('?')[0])
  const file = join(DIST, path)
  try {
    const body = await readFile(extname(path) ? file : join(DIST, 'index.html'))
    res.writeHead(200, {
      'content-type': MIME[extname(path)] ?? MIME['.html'],
      'cache-control': 'no-store',
    })
    res.end(body)
  } catch {
    res.writeHead(404).end('not found')
  }
})

await new Promise((resolve) => server.listen(PORT, resolve))

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH ?? '/usr/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
})

const warnings = []

try {
  for (const route of ROUTES) {
    const page = await browser.newPage()
    const errors = []
    page.on('pageerror', (e) => errors.push(String(e)))
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text())
    })

    await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'networkidle0' })
    // The lazy route chunk resolves after the shell paints; wait for the real
    // H1 and for the Suspense fallback to disappear before capturing markup.
    await page.waitForFunction(
      () => {
        const main = document.querySelector('#root main')
        if (!main || main.querySelector('[role="status"]')) return false
        return main.querySelector('h1') !== null
      },
      { timeout: 20000, polling: 100 },
    )

    // Drop the noscript fallback and the runtime-injected analytics script: the
    // snapshot must not ship a tracker that loads before the consent check.
    await page.evaluate(() => {
      document.querySelector('noscript')?.remove()
      document.querySelector('script[data-analytics]')?.remove()
    })
    const html = await page.content()
    if (errors.length) warnings.push(`${route}: ${errors.join(' | ')}`)
    const out = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html')
    await mkdir(join(out, '..'), { recursive: true })
    await writeFile(out, html)
    console.log(`prerendered ${route.padEnd(12)} ${await page.title()}`)
    await page.close()
  }
} finally {
  await browser.close()
  server.close()
}

if (warnings.length) {
  console.log('\nwarnings:')
  for (const w of warnings) console.log(' -', w)
}
