import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Download, LoaderCircle } from 'lucide-react'
import { Footer } from '../components/Footer'
import { Container } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { NodeCanvas } from '../components/NodeCanvas'

const buttonClass = 'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#06d6a0] px-5 py-3 text-sm font-semibold text-[#111110] transition hover:bg-[#05b98a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06d6a0] disabled:cursor-wait disabled:opacity-60'
const inputClass = 'w-full rounded-lg border border-[#2a2a28] bg-[#111110] px-4 py-3 text-sm text-[#d4d2cc] outline-none transition placeholder:text-[#66655f] focus:border-[#06d6a0]/70 focus:ring-1 focus:ring-[#06d6a0]/70 disabled:opacity-60'

export function EarlyAccessPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')
  const successHeading = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const previousTitle = document.title
    document.title = 'Get early access — Procedia'
    return () => { document.title = previousTitle }
  }, [])

  useEffect(() => {
    if (status === 'success') successHeading.current?.focus()
  }, [status])

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    setError('')

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
        signal: AbortSignal.timeout(15000),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'We couldn’t complete your request. Please try again.')

      const url = new URL(data.downloadUrl)
      if (url.protocol !== 'https:') throw new Error('The download is temporarily unavailable. Please try again later.')
      setDownloadUrl(url.href)
      setStatus('success')
    } catch (err) {
      setError(err.name === 'TimeoutError' || err instanceof TypeError
        ? 'Unable to connect. Check your connection and try again.'
        : err.message)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#111110]">
      <NodeCanvas />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="relative flex flex-1 items-center overflow-hidden py-20 sm:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(83,74,183,0.14),transparent_60%)]" />
          <Container className="relative w-full">
            <section aria-labelledby="early-access-title" className="mx-auto max-w-xl rounded-xl border border-[#06d6a0]/30 bg-[#161614]/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-10">
              <div className="mx-auto max-w-md text-center">
                <span className="inline-flex items-center gap-2 rounded-md border border-[#06d6a0]/20 bg-[#06d6a0]/[0.06] px-3 py-1.5 text-xs font-medium text-[#06d6a0]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#06d6a0]" /> Procedia early access
                </span>
                <h1 id="early-access-title" className="mt-5 text-2xl font-bold tracking-tight text-[#d4d2cc] sm:text-3xl">Get Procedia for After Effects</h1>
                <p className="mt-3 text-sm leading-6 text-[#888780]">
                  Bring your creative workflow into focus with a visual node-based workspace. Sign up below to get the latest early-access installer.
                </p>
              </div>

              <div className="mx-auto mt-8 max-w-md">
                {status === 'success' ? (
                  <div className="text-center">
                    <CheckCircle2 aria-hidden="true" className="mx-auto h-10 w-10 text-[#06d6a0]" />
                    <h2 ref={successHeading} tabIndex={-1} className="mt-4 text-xl font-semibold text-[#d4d2cc] outline-none">You’re on the list, {name.trim()}.</h2>
                    <p className="mt-2 text-sm leading-6 text-[#888780]">Your early access is registered. Download the installer below to get started.</p>
                    <a href={downloadUrl} className={`${buttonClass} mt-6`}><Download aria-hidden="true" className="h-4 w-4" />Download Procedia</a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} aria-busy={status === 'loading'}>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="early-access-name" className="mb-2 block text-xs font-medium text-[#d4d2cc]">Name <span className="text-[#06d6a0]">*</span></label>
                        <input id="early-access-name" name="name" type="text" autoComplete="name" required maxLength={120} value={name} onChange={event => setName(event.target.value)} disabled={status === 'loading'} placeholder="Your name" aria-describedby={error ? 'signup-error' : undefined} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="early-access-email" className="mb-2 block text-xs font-medium text-[#d4d2cc]">Email address <span className="text-[#06d6a0]">*</span></label>
                        <input id="early-access-email" name="email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={event => setEmail(event.target.value)} disabled={status === 'loading'} placeholder="you@example.com" aria-describedby={error ? 'signup-error signup-note' : 'signup-note'} className={inputClass} />
                      </div>
                    </div>
                    {error && <p id="signup-error" role="alert" className="mt-4 text-sm leading-6 text-[#ffb4ab]">{error}</p>}
                    <button type="submit" disabled={status === 'loading'} className={`${buttonClass} mt-6`}>
                      {status === 'loading' ? <><LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin motion-reduce:animate-none" />Preparing your download…</> : <>Register &amp; get the download <ArrowRight aria-hidden="true" className="h-4 w-4" /></>}
                    </button>
                    <p id="signup-note" className="mt-4 text-center text-xs leading-5 text-[#77766f]">Both fields are required. Your details are used to register your early access.</p>
                  </form>
                )}
              </div>
            </section>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  )
}
