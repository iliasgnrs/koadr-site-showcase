import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Analytics } from './components/Analytics'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/Page'
import { Home } from './pages/Home'
import { privacy, terms } from './content/site'

const Features = lazy(() => import('./pages/Features').then((m) => ({ default: m.Features })))
const Providers = lazy(() => import('./pages/Providers').then((m) => ({ default: m.Providers })))
const Pricing = lazy(() => import('./pages/Pricing').then((m) => ({ default: m.Pricing })))
const SelfHost = lazy(() => import('./pages/SelfHost').then((m) => ({ default: m.SelfHost })))
const Changelog = lazy(() => import('./pages/Changelog').then((m) => ({ default: m.Changelog })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))
const LegalPage = lazy(() => import('./pages/LegalPage').then((m) => ({ default: m.LegalPage })))

function RouteFallback() {
  return (
    <div className="container-page flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <span className="sr-only">Loading page</span>
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-line border-t-brand" aria-hidden="true" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="flex min-h-dvh flex-col">
        <Navbar />
        <main id="main" className="flex-1">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/providers" element={<Providers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/self-host" element={<SelfHost />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route
                path="/privacy"
                element={
                  <LegalPage
                    {...privacy}
                    title="Privacy Policy"
                    description="How Koadr handles your data, API keys and self-hosted installations."
                    path="/privacy"
                  />
                }
              />
              <Route
                path="/terms"
                element={
                  <LegalPage
                    {...terms}
                    title="Terms of Service"
                    description="The terms that govern use of hosted Koadr."
                    path="/terms"
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
