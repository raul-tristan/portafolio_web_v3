import Reveal from './Reveal'
import { EMAIL, PHONE, LINKEDIN, GITHUB } from '../data'

const CHANNELS = [
  { label: 'email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'teléfono', value: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}` },
  { label: 'linkedin', value: '/raul-tristan', href: LINKEDIN },
  { label: 'github', value: '/raul-tristan', href: GITHUB },
]

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 pt-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-sm tracking-[0.3em] text-[#00f48e]">06 // CONTACTO</p>
          <h2 className="text-[11vw] font-extrabold leading-[0.95] tracking-tighter text-[#e9f6ef] sm:text-7xl md:text-8xl">
            ¿CONSTRUIMOS
            <br />
            <span className="text-outline glow-soft">ALGO JUNTOS?</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={`mailto:${EMAIL}`}
            className="term-frame mt-12 inline-flex items-center gap-3 px-6 py-4 text-sm text-[#00f48e] transition-colors duration-300 hover:bg-[#00f48e] hover:text-black sm:text-base"
          >
            <span>&gt;</span> mail {EMAIL}
            <span className="caret" />
          </a>
        </Reveal>

        <div className="mt-16 grid gap-px bg-[rgba(0,244,142,0.16)] sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={i * 80} className="bg-[#050505]">
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group block p-6 transition-colors hover:bg-[rgba(0,244,142,0.05)]"
              >
                <p className="text-xs tracking-widest text-[#9fb3a9]">{c.label}</p>
                <p className="mt-2 break-all text-sm text-[#e9f6ef] transition-colors group-hover:text-[#00f48e]">
                  {c.value} <span className="text-[#00f48e]">↗</span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* email marquee */}
      <div className="mt-24 overflow-hidden border-y border-[rgba(0,244,142,0.16)] py-6">
        <a href={`mailto:${EMAIL}`} className="block" data-hover>
          <div className="marquee-track gap-12">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 gap-12" aria-hidden={dup === 1}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="glow whitespace-nowrap text-3xl font-extrabold tracking-tight text-[#00f48e] transition-colors hover:text-[#e9f6ef] sm:text-5xl"
                  >
                    {EMAIL} <span className="text-[#e9f6ef]">→</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </a>
      </div>

      {/* footer */}
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-[10px] tracking-[0.25em] text-[#9fb3a9] sm:px-8 sm:text-xs">
        <span>© 2026 RAÚL TRISTAN</span>
        <span className="hidden sm:block">HUÁNUCO · PERÚ</span>
        <span>
          exit code <span className="text-[#00f48e]">0</span>
        </span>
      </footer>
    </section>
  )
}
