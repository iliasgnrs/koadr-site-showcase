export const HOSTED_APP_URL = 'https://app.koadr.dev'
export const GITHUB_URL = 'https://github.com/iliasgnrs/koadr'
export const GITHUB_ISSUES_URL = `${GITHUB_URL}/issues`
export const GITHUB_RELEASES_URL = `${GITHUB_URL}/releases`
export const GITHUB_LICENSE_URL = `${GITHUB_URL}/blob/main/LICENSE`
export const SITE_URL = 'https://koadr.dev'

export const CONTACT_EMAIL = 'info@koadr.dev'

export const legal = {
  operator: 'Scalepath OÜ',
  updated: '8 November 2026',
  jurisdiction: 'Estonia',
  analytics: {
    name: 'BuddyStat',
    siteId: '5471baf74b16',
  },
}

export const tagline = ['prompt', 'it.', 'build', 'it.', 'ship', 'it.'] as const

export const site = {
  name: 'Koadr',
  tagline: 'prompt it. build it. ship it.',
  description:
    'Koadr is an open-architecture, agentic AI workspace that turns natural language into production-ready full-stack apps, instantly, inside your browser. No local setup, no limits.',
  byok: 'Model-agnostic. Bring your own keys.',
}

export const nav = [
  { label: 'Features', href: '/features' },
  { label: 'Providers', href: '/providers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Self-host', href: '/self-host' },
  { label: 'Changelog', href: '/changelog' },
]

export const cta = {
  start: { label: 'Start now', href: HOSTED_APP_URL },
  selfHost: { label: 'Self host', href: GITHUB_URL },
}

export const footer = {
  description: 'The agentic AI workspace that builds full-stack apps in your browser.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Providers', href: '/providers' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Open source',
      links: [
        { label: 'GitHub', href: GITHUB_URL, external: true },
        { label: 'Self-host guide', href: '/self-host' },
        { label: 'Issues', href: GITHUB_ISSUES_URL, external: true },
        { label: 'License', href: GITHUB_LICENSE_URL, external: true },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
    {
      title: 'Contact',
      links: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, external: true }],
    },
  ],
}

export const home = {
  badge: 'Open source · BYOK · 22+ model providers',
  hero: {
    sub: site.description,
    byok: site.byok,
  },
  providers: {
    title: 'Works with the models you already use',
    logos: [
      'Anthropic',
      'OpenAI',
      'Google',
      'DeepSeek',
      'Groq',
      'xAI',
      'Mistral',
      'OpenRouter',
      'Ollama',
      'LM Studio',
      '+ more',
    ],
  },
  steps: {
    heading: 'From idea to deployed app in one chat',
    items: [
      {
        title: 'Prompt it',
        body: 'Describe what you want in plain language. Koadr plans the stack, writes the files and shows its work as it goes.',
      },
      {
        title: 'Build it',
        body: 'A full Node.js stack runs in your browser via WebContainers. Installs, dev servers and terminals, zero setup.',
      },
      {
        title: 'Ship it',
        body: 'Deploy to Netlify, Vercel or GitHub Pages in one click, or export the repo and take it anywhere.',
      },
    ],
  },
  features: {
    heading: 'Everything a real project needs',
    sub: 'Not a toy sandbox. A working environment with the tools you already reach for.',
    items: [
      {
        title: 'Full-stack, in the browser',
        body: 'WebContainers run Node.js, package installs and dev servers client-side. No local toolchain, no cold starts.',
      },
      {
        title: 'Interactive workbench',
        body: 'Code editor, terminal, visual diff viewer and live preview, opened automatically for every started chat.',
      },
      {
        title: 'Smart starters',
        body: 'Ask for a framework explicitly and Koadr picks a matching starter with install and dev commands ready to run.',
      },
      {
        title: 'Deployments',
        body: 'Ship to Netlify, Vercel or GitHub Pages in one click. Custom domains on Pro.',
      },
      {
        title: 'Git you can trust',
        body: 'Clone and push repos, restore snapshots, lock files during conflicts and search the whole codebase.',
      },
      {
        title: 'Model-agnostic',
        body: '22+ providers, local models included. Switch models per task and keep your keys.',
      },
    ],
    seeAll: { label: 'See all features', href: '/features' },
  },
  ways: {
    heading: 'Two ways to run Koadr',
    items: [
      {
        title: 'Hosted',
        body: 'Sign in and start building in seconds. We run the infrastructure, you bring the keys.',
        href: '/pricing',
        label: 'See pricing',
        primary: true,
      },
      {
        title: 'Self-hosted',
        body: 'Free and open source. Run it on your own server, keep full control of your data and keys.',
        href: '/self-host',
        label: 'Self-host guide',
        primary: false,
      },
    ],
  },
}

export type FeatureBlock = {
  id: string
  title: string
  body: string
  bullets: string[]
  visual: FeatureVisual
}

export type FeatureVisual =
  | 'workbench'
  | 'starters'
  | 'prompt-library'
  | 'workflows'
  | 'deploy'
  | 'data'
  | 'mcp'
  | 'platforms'
  | 'voice'

export const features: { intro: { heading: string; sub: string }; blocks: FeatureBlock[] } = {
  intro: {
    heading: 'Built like a real dev environment',
    sub: 'Every feature exists because building software needs it, not because it demos well.',
  },
  blocks: [
    {
      id: 'browser-development',
      title: 'Full-stack development in the browser',
      body: 'WebContainers give you a real Node.js runtime inside the tab. No installs, no VMs, no waiting for a container to boot.',
      bullets: [
        'Node.js, npm and dev servers run client-side',
        'Works on any modern browser, including Chromebooks',
        'Zero local setup, zero cleanup',
      ],
      visual: 'workbench',
    },
    {
      id: 'workbench',
      title: 'An interactive workbench',
      body: 'The workspace opens by default when a chat starts, and you can reopen it any time. Everything you need sits on one screen.',
      bullets: [
        'Code editor with syntax highlighting',
        'Terminal with real command output',
        'Visual diff viewer before accepting changes',
        'Live preview of the running app',
      ],
      visual: 'workbench',
    },
    {
      id: 'starters',
      title: 'Smart starters',
      body: 'Ask for Next.js, Vite or Expo explicitly and Koadr selects a matching starter, with install and dev commands already wired up.',
      bullets: [
        'Framework-aware project scaffolding',
        'Install and dev commands ready to run',
        'Extend or swap the starter at any time',
      ],
      visual: 'starters',
    },
    {
      id: 'prompt-library',
      title: 'Prompt library',
      body: 'Reusable prompts live under Settings → Workspace → Features. Simple Sal keeps guidance concise; Tiny Tim is tuned for smaller models.',
      bullets: ['Simple Sal for concise guidance', 'Tiny Tim tuned for smaller models', 'Shared across your workspace'],
      visual: 'prompt-library',
    },
    {
      id: 'workflows',
      title: 'Project workflows',
      body: 'The unglamorous parts of shipping, handled: version control, safe resets and fast search across the codebase.',
      bullets: [
        'Git clone and push',
        'Snapshot restoration',
        'File conflict locking',
        'Codebase search',
        'ZIP export',
      ],
      visual: 'workflows',
    },
    {
      id: 'deployments',
      title: 'Deployments',
      body: 'Push to production without leaving the tab. Connect once, then deploy the current build in a single click.',
      bullets: ['Netlify', 'Vercel', 'GitHub Pages'],
      visual: 'deploy',
    },
    {
      id: 'database-visuals',
      title: 'Database and visuals',
      body: 'Wire up Supabase for auth, storage and Postgres, then render results as charts without extra glue code.',
      bullets: ['Supabase integration', 'Data visualization charts', 'Query and inspect from the workbench'],
      visual: 'data',
    },
    {
      id: 'mcp',
      title: 'MCP tooling and connectors',
      body: 'Attach MCP tools from the prompt attachment menu, and manage GitHub, GitLab, Netlify and other connections under Settings → Integrations → Connectors.',
      bullets: ['Select MCP tools per prompt', 'Manage connectors in one place', 'First-party GitHub, GitLab and Netlify integrations'],
      visual: 'mcp',
    },
    {
      id: 'cross-platform',
      title: 'Cross-platform',
      body: 'Take Koadr with you. A native Electron desktop app ships alongside the web workspace, and Expo / React Native projects are supported.',
      bullets: ['Native Electron desktop app', 'Expo and React Native support', 'Same projects, any surface'],
      visual: 'platforms',
    },
    {
      id: 'voice',
      title: 'Voice prompting',
      body: 'Describe what you want out loud. Useful when you are sketching an idea faster than you can type it.',
      bullets: ['Prompt by voice', 'Works alongside typed messages', 'Same agent, same project context'],
      visual: 'voice',
    },
  ],
}

export const providers = {
  hero: {
    heading: 'Your keys. Your models. Your code.',
    sub: 'Koadr is model-agnostic and BYOK. No lock-in, switch models per task, and your keys never leave your control.',
  },
  defaultNote: 'OpenRouter, Anthropic, OpenAI and Google are enabled by default.',
  groups: [
    {
      title: 'Cloud',
      items: [
        'Anthropic',
        'OpenAI',
        'Google',
        'DeepSeek',
        'Groq',
        'xAI',
        'Mistral',
        'OpenRouter',
        'Together AI',
        'Fireworks',
        'Cohere',
        'Perplexity',
        'Cerebras',
        'SambaNova',
        'Hyperbolic',
        'Novita',
        'DeepInfra',
        'Azure OpenAI',
        'AWS Bedrock',
        'Vertex AI',
        'GitHub Models',
        'Requesty',
      ],
    },
    {
      title: 'Local',
      items: ['Ollama', 'LM Studio'],
    },
  ],
  settingsToggles: [
    { name: 'OpenRouter', on: true },
    { name: 'Anthropic', on: true },
    { name: 'OpenAI', on: true },
    { name: 'Google', on: true },
    { name: 'DeepSeek', on: false },
    { name: 'Groq', on: false },
    { name: 'Mistral', on: false },
    { name: 'xAI', on: false },
    { name: 'Ollama', on: true },
    { name: 'LM Studio', on: false },
  ],
  faq: [
    {
      q: 'Do I need my own API keys?',
      a: 'Yes. Koadr is BYOK: you connect your provider accounts and pay them directly. We never mark up model usage.',
    },
    {
      q: 'Can I run fully local models?',
      a: 'Yes. Point Koadr at Ollama or LM Studio on your machine. If the endpoint is reachable, Koadr uses it like any cloud provider.',
    },
    {
      q: 'Can I switch models mid-project?',
      a: 'Yes. The model is a per-task choice, not a project setting. Different steps of the same build can use different providers.',
    },
  ],
}

export const pricing = {
  hero: {
    heading: 'Simple pricing, no lock-in',
    sub: 'Start free. Upgrade when you want more cloud sync, domains and priority support. Or self-host and skip the bill entirely.',
    annualNote: '2 months free',
  },
  plans: [
    {
      id: 'free',
      name: 'Free',
      priceMonthly: '0€',
      priceYearly: '0€',
      period: 'forever',
      highlight: false,
      summary: 'Hosted at koadr.dev. Everything you need to build your first real project.',
      features: [
        'Limited cloud-synced projects',
        'Limited storage and history',
        'Limited deployments',
        'Bring your own keys',
      ],
      ctaKey: 'start' as const,
    },
    {
      id: 'pro',
      name: 'Pro',
      priceMonthly: '9.90€',
      priceYearly: '99€',
      period: 'per month',
      periodYearly: 'per year',
      highlight: true,
      badge: 'Most popular',
      summary: 'Hosted at koadr.dev. For people shipping every week.',
      features: [
        'Unlimited projects',
        'Unlimited cloud sync and backup',
        'No usage limits',
        'Custom domains',
        'Priority support',
      ],
      ctaKey: 'start' as const,
    },
    {
      id: 'self-host',
      name: 'Self-host',
      priceMonthly: '0€',
      priceYearly: '0€',
      period: 'forever',
      highlight: false,
      summary: 'Open source. Run it on your own server with full control.',
      features: [
        'Run on your own infrastructure',
        'Full control of data and keys',
        'No limits',
        'You manage servers and updates',
      ],
      ctaKey: 'selfHost' as const,
    },
  ],
  comparison: {
    heading: 'Compare plans',
    columns: ['Free', 'Pro', 'Self-host'],
    rows: [
      { label: 'Price', values: ['0€', '9.90€/mo or 99€/yr', '0€'] },
      { label: 'Hosting', values: ['koadr.dev', 'koadr.dev', 'Your server'] },
      { label: 'Projects', values: ['Limited', 'Unlimited', 'Unlimited'] },
      { label: 'Cloud sync and backup', values: ['Limited', 'Unlimited', 'Your own backups'] },
      { label: 'History and storage', values: ['Limited', 'Unlimited', 'Your disk'] },
      { label: 'Deployments', values: ['Limited', 'Unlimited', 'Unlimited'] },
      { label: 'Custom domains', values: ['—', 'Included', 'Included'] },
      { label: 'Priority support', values: ['—', 'Included', 'Community'] },
      { label: 'Bring your own keys', values: ['Yes', 'Yes', 'Yes'] },
      { label: 'Updates', values: ['Automatic', 'Automatic', 'You manage'] },
    ],
  },
  byokNote:
    'Koadr is BYOK: you pay your AI provider directly for model usage, never marked up by us.',
  faq: [
    {
      q: 'What counts as a limit?',
      a: 'Cloud-synced projects, stored history, file storage and deployment count. Prompts you send to your own provider are never counted or marked up.',
    },
    {
      q: 'Can I switch from hosted to self-host and export my projects?',
      a: 'Yes. Export any project as a ZIP or push it to your own Git repository, then run it on your infrastructure.',
    },
    {
      q: 'What is your refund policy?',
      a: 'If a paid period was charged by mistake or the service was unavailable for a significant part of it, email info@koadr.dev within 14 days of the charge and we will review a refund or credit. We do not otherwise provide refunds for partial periods.',
    },
    {
      q: 'How does billing work?',
      a: 'Pro is billed monthly (9.90 EUR) or annually (99 EUR) in euro, and renews automatically until cancelled. You can cancel at any time from your account; access continues until the end of the paid period. Model usage is paid to your AI provider directly.',
    },
    {
      q: 'Why pay if it is open source?',
      a: 'Convenience. Hosted Koadr works in a few clicks; self-hosting means provisioning and maintaining a server yourself.',
    },
  ],
}

export const selfHost = {
  hero: {
    heading: 'Run Koadr on your own infrastructure. Free, open source.',
    sub: 'Full control of your data, your keys and your uptime. Clone the repo and you own the whole stack.',
  },
  requirements: [
    'Node.js 20 or newer',
    'pnpm',
    'A server or VPS (optional, if you run it locally)',
  ],
  steps: [
    {
      title: 'Clone the repository',
      code: `git clone https://github.com/iliasgnrs/koadr.git\ncd koadr`,
    },
    {
      title: 'Install dependencies',
      code: `pnpm install`,
    },
    {
      title: 'Configure environment and API keys',
      code: `cp .env.example .env\n# Add your provider keys, then:\npnpm dev`,
    },
  ],
  verifyNote:
    'Commands change between releases. Always check them against the README in the repository.',
  dockerNote:
    'If the repository ships a Dockerfile or compose file, you can run Koadr as a container instead. Check the README for the current setup.',
  helpNote: 'Stuck? Open an issue on GitHub.',
  callout: {
    heading: "Don't want to manage a server?",
    body: 'Use hosted Koadr. Same app, none of the operations.',
  },
}

export const changelog = {
  hero: {
    heading: 'Changelog',
    sub: 'Recent highlights from the Koadr repo.',
  },
  entries: [
    {
      title: 'Expanded AI and tooling ecosystem',
      body: '22+ providers, MCP tools and connectors, and voice prompting.',
    },
    {
      title: 'Enhanced code and project workflows',
      body: 'Visual diffs, file conflict locking, codebase search, Git integration and snapshot restoration.',
    },
    {
      title: 'Cross-platform and deployments',
      body: 'Native Electron app, Expo support, and one-click deploys to Netlify, Vercel and GitHub Pages.',
    },
    {
      title: 'Data and backend integrations',
      body: 'Supabase integration, data visualization charts, and bulk chat operations.',
    },
    {
      title: 'Prompt and connector controls',
      body: 'A workspace prompt library and central management for integrations.',
    },
  ],
  closing:
    'Koadr is focused on stability: bug fixes, dependency updates and reliability work.',
  releasesLabel: 'See GitHub releases',
}

export const notFound = {
  heading: '404',
  body: 'This page does not exist. The prompt was great though.',
  back: 'Back to home',
}

export const privacy = {
  heading: 'Privacy Policy',
  updated: 'Last updated: 8 November 2026',
  intro:
    'This policy explains what data is collected when you visit koadr.dev, why, and what rights you have. The operator of this website is Scalepath OÜ (Estonia).',
  sections: [
    {
      title: 'Who we are',
      body: 'This website, koadr.dev, is operated by Scalepath OÜ, registered in Estonia. For any privacy question or request, contact info@koadr.dev.',
    },
    {
      title: 'What this website collects',
      body: 'This marketing site does not offer accounts, sign-up forms, payments or comment sections. The only personal data we process about visitors is the website analytics described below. We do not sell personal data.',
    },
    {
      title: 'Website analytics (BuddyStat)',
      body: 'We use BuddyStat, a privacy-focused web analytics service, to understand how the site is used. When a page loads, the BuddyStat script sends an event to BuddyStat containing: the page path and title, the referring page, the hostname, URL query parameters, the page language, screen width and height, and technical signals used to detect automated traffic. Events are stored in your browser to recognise a returning visitor and to measure page views.',
    },
    {
      title: 'Cookies and local storage',
      body: 'This site sets no advertising or marketing cookies and runs no cross-site tracking. BuddyStat stores an anonymous visitor identifier and a session identifier in your browser\u2019s local and session storage, plus a first-party referral cookie if you arrive from another site. Your theme preference (light or dark) is also stored locally so the site remembers your choice. These entries contain no name, email address or account information.',
    },
    {
      title: 'Legal basis',
      body: 'Where the EU or UK GDPR applies, we rely on our legitimate interest in understanding how the website is used and keeping it secure (Article 6(1)(f)), balanced against your rights. Analytics data is limited to what is described above and is not used to build advertising profiles.',
    },
    {
      title: 'The Koadr application',
      body: 'The hosted application at app.koadr.dev is a separate service with its own terms and data handling. This website links to it but does not embed it or share visitor analytics with it.',
    },
    {
      title: 'API keys and AI providers',
      body: 'API keys for AI model providers are supplied by you. When you use Koadr, your prompts and project code are sent to the AI provider you configure, and are handled under that provider\u2019s terms and privacy policy. Koadr does not sell or mark up model usage.',
    },
    {
      title: 'Self-hosted installations',
      body: 'If you self-host Koadr, you control your own data. We receive no project data, prompts or keys from self-hosted installations. This website\u2019s analytics only covers visits to koadr.dev itself.',
    },
    {
      title: 'Data sharing and retention',
      body: 'Analytics data is processed on our behalf by BuddyStat as a service provider. We do not sell personal data or share it for advertising. Analytics records are retained only as long as needed to understand site usage and are periodically aggregated or removed.',
    },
    {
      title: 'Your rights',
      body: 'Under the GDPR you may request access to, correction of, or deletion of your personal data, object to processing based on legitimate interest, and request a copy of your data. Email info@koadr.dev and we will respond within the period required by law. You also have the right to lodge a complaint with the Estonian Data Protection Inspectorate or your local supervisory authority.',
    },
    {
      title: 'Changes',
      body: 'If this policy changes materially, we will update the date at the top of this page. Continued use of the website after an update means you accept the revised policy.',
    },
  ],
}

export const terms = {
  heading: 'Terms of Service',
  updated: 'Last updated: 8 November 2026',
  intro:
    'These terms govern the koadr.dev website and the hosted Koadr application. The website and hosted service are operated by Scalepath OÜ (Estonia).',
  sections: [
    {
      title: 'Agreement',
      body: 'By visiting koadr.dev or using hosted Koadr at app.koadr.dev, you agree to these terms. If you do not agree, do not use the site or the service. These terms apply to Scalepath OÜ and to you; no other person has rights under them.',
    },
    {
      title: 'The service',
      body: 'Koadr is an agentic AI development workspace that runs a Node.js stack in your browser. Hosted Koadr is provided as a service. The Koadr source code is separately available under the MIT license and may be self-hosted under that license.',
    },
    {
      title: 'Your account, content and keys',
      body: 'You keep ownership of the projects and code you create, and of the AI provider API keys you connect. You are responsible for the security of your keys and for all activity under your account.',
    },
    {
      title: 'AI output is not guaranteed',
      body: 'Output is generated by AI models you select. It may be incorrect, incomplete or insecure. Review generated code before relying on it or deploying it. You are responsible for what you build, publish and deploy.',
    },
    {
      title: 'Acceptable use',
      body: 'Do not use Koadr to break the law, to infringe intellectual property, to attack or disrupt systems you do not own, to distribute malware, or to generate content that harms others. Do not attempt to defeat usage limits, resell hosted access without permission, or interfere with other users. We may suspend or terminate accounts that violate these rules.',
    },
    {
      title: 'Plans, billing and cancellation',
      body: 'The Free plan has no charge and includes limited cloud-synced projects, storage, history and deployments. Pro is billed monthly (9.90 EUR) or annually (99 EUR) through our payment provider and renews automatically until cancelled. You can cancel at any time from your account; access continues until the end of the paid period. Prices shown are in euro and exclude any taxes that may apply. Koadr is bring-your-own-keys: you pay your AI provider directly for model usage, and we never mark that usage up.',
    },
    {
      title: 'Refunds',
      body: 'If a paid period was charged by mistake or the service was unavailable for a significant part of it, email info@koadr.dev within 14 days of the charge and we will review a refund or credit. We do not otherwise provide refunds for partial periods.',
    },
    {
      title: 'Availability and changes',
      body: 'We may change, suspend or discontinue features. We aim to keep the service available but do not guarantee uninterrupted access. Back up anything you cannot afford to lose by exporting it or pushing it to your own Git repository.',
    },
    {
      title: 'Termination and export',
      body: 'You may stop using the service at any time. You can export your projects as a ZIP or push them to your own repository before closing your account. We may suspend or terminate access for material breaches of these terms, or where required by law.',
    },
    {
      title: 'Open-source license',
      body: 'Self-hosted use of Koadr is governed by the MIT license in the GitHub repository. These terms do not restrict any rights granted to you by that license.',
    },
    {
      title: 'Disclaimer of warranties',
      body: 'The website and hosted service are provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose and non-infringement, to the extent permitted by law.',
    },
    {
      title: 'Limitation of liability',
      body: 'To the extent permitted by law, Scalepath OÜ is not liable for indirect, incidental or consequential loss, loss of data, loss of profit or business interruption arising from your use of the service. Our total liability for a claim is limited to the amount you paid for the service in the twelve months before the claim. Nothing in these terms limits liability that cannot lawfully be limited.',
    },
    {
      title: 'Governing law',
      body: 'These terms are governed by the laws of Estonia, and the courts of Estonia have jurisdiction, without affecting any mandatory consumer rights you have in your country of residence.',
    },
    {
      title: 'Contact and changes',
      body: 'Questions about these terms: info@koadr.dev. If we make material changes we will update the date at the top of this page; continued use after an update means you accept the revised terms.',
    },
  ],
}
