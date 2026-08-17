import { useEffect, useState } from 'react'

const LINKS = [
  { n: '01', label: 'sobre_mi', href: '#sobre-mi' },
  { n: '02', label: 'experiencia', href: '#experiencia' },
  { n: '03', label: 'stack', href: '#stack' },
  { n: '04', label: 'proyectos', href: '#proyectos' },
  { n: '05', label: 'contacto', href: '#contacto' },
]

export default function Nav() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 160)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[rgba(0,244,142,0.16)] bg-[rgba(5,5,5,0.72)] backdrop-blur-md transition-transform duration-500 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="glow text-sm font-bold text-[#00f48e]">RT://</span>
          <span className="hidden items-center gap-2 text-xs text-[#9fb3a9] sm:flex">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#00f48e]" />
            disponible
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.n}
              href={l.href}
              className="group text-xs tracking-widest text-[#9fb3a9] transition-colors hover:text-[#00f48e]"
            >
              <span className="text-[#00f48e]">{l.n}.</span>
              {l.label}
              <span className="block h-px max-w-0 bg-[#00f48e] transition-all duration-300 group-hover:max-w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="border border-[#00f48e] px-3 py-1.5 text-xs tracking-widest text-[#00f48e] transition-colors hover:bg-[#00f48e] hover:text-black md:hidden"
        >
          contacto
        </a>
      </div>
    </header>
  )
}
