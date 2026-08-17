import { useEffect, useRef } from 'react'

const TERMINAL = [
  { cmd: 'whoami', out: 'full stack developer' },
  { cmd: 'cat stack.txt', out: 'react · next.js · angular · .net · spring boot · node' },
  { cmd: 'cat ubicacion.txt', out: 'huánuco · perú — remoto' },
]

export default function Hero() {
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = nameRef.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="top" className="blueprint relative flex min-h-screen flex-col overflow-hidden">
      {/* meta lines */}
      <div className="mx-auto flex w-full max-w-6xl justify-between px-5 pt-20 text-[10px] tracking-[0.3em] text-[#9fb3a9] sm:px-8 sm:text-xs">
        <span>// PORTAFOLIO — 2026</span>
        <span className="hidden sm:block">DESARROLLADOR FULL STACK</span>
        <span>PERÚ</span>
      </div>

      {/* split name */}
      <div ref={nameRef} className="pointer-events-none relative flex-1 transition-transform duration-300 ease-out will-change-transform">
        <h1 className="flicker absolute left-4 top-6 text-[17vw] font-extrabold leading-[0.85] tracking-tighter text-[#e9f6ef] sm:left-10 sm:top-10 sm:text-[13vw]">
          RAÚL
        </h1>
        <p className="text-outline absolute bottom-4 right-4 text-[12vw] font-extrabold leading-[0.85] tracking-tighter sm:bottom-8 sm:right-10">
          TRISTAN
        </p>

        {/* terminal card */}
        <div className="absolute left-1/2 top-1/2 w-[min(560px,90vw)] -translate-x-1/2 -translate-y-1/2">
          <div className="term-frame p-5 text-xs leading-6 sm:p-7 sm:text-sm sm:leading-7">
            <div className="mb-4 flex items-center gap-2 border-b border-[rgba(0,244,142,0.16)] pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(0,244,142,0.25)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(0,244,142,0.45)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00f48e]" />
              <span className="ml-3 text-[10px] tracking-widest text-[#9fb3a9]">
                guest@rt-dev: ~
              </span>
            </div>
            {TERMINAL.map((l) => (
              <div key={l.cmd} className="mb-3">
                <p className="text-[#e9f6ef]">
                  <span className="text-[#00f48e]">guest@rt-dev:~$ </span>
                  {l.cmd}
                </p>
                <p className="glow-soft pl-4 text-[#00f48e]">&gt; {l.out}</p>
              </div>
            ))}
            <p className="text-[#e9f6ef]">
              <span className="text-[#00f48e]">guest@rt-dev:~$ </span>
              status
              <span className="caret" />
            </p>
          </div>
        </div>
      </div>

      {/* bottom row */}
      <div className="mx-auto flex w-full max-w-6xl items-end justify-between px-5 pb-8 sm:px-8">
        <p className="max-w-[240px] text-[10px] leading-5 tracking-wider text-[#9fb3a9] sm:text-xs">
          +4 años resolviendo desafíos técnicos con código limpio y soluciones que funcionan.
        </p>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-[#9fb3a9]">SCROLL</span>
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  )
}
