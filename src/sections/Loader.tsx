import { useEffect, useState } from 'react'

const LINES = [
  '> run portafolio.sys',
  '> load core.module ........... ok',
  '> mount /experiencia ......... ok',
  '> auth raul.tristan .......... ok',
]

export default function Loader({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [percent, setPercent] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= LINES.length) {
          clearInterval(lineTimer)
          return v
        }
        return v + 1
      })
    }, 320)
    return () => clearInterval(lineTimer)
  }, [])

  useEffect(() => {
    if (visibleLines < LINES.length) return
    const pctTimer = setInterval(() => {
      setPercent((p) => {
        const next = Math.min(100, p + Math.floor(Math.random() * 5) + 2)
        if (next >= 100) clearInterval(pctTimer)
        return next
      })
    }, 28)
    return () => clearInterval(pctTimer)
  }, [visibleLines])

  useEffect(() => {
    if (percent < 100) return
    const t1 = setTimeout(() => setLeaving(true), 350)
    const t2 = setTimeout(onDone, 1050)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [percent, onDone])

  return (
    <div
      className={`fixed inset-0 z-[95] flex flex-col items-center justify-center bg-black transition-all duration-700 ${
        leaving ? 'pointer-events-none scale-105 opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-[min(520px,88vw)]">
        <div className="term-frame p-6 text-sm leading-7 text-[#00f48e] glow-soft sm:text-base">
          {LINES.slice(0, visibleLines).map((l) => (
            <p key={l}>{l}</p>
          ))}
          {visibleLines >= LINES.length && (
            <p>
              {'> render ui ............... '}
              <span className="font-bold">{percent}%</span>
              <span className="caret" />
            </p>
          )}
          {visibleLines < LINES.length && <span className="caret" />}
        </div>
        <div className="mt-4 h-px w-full bg-[rgba(0,244,142,0.15)]">
          <div
            className="h-px bg-[#00f48e] shadow-[0_0_12px_#00f48e] transition-[width] duration-100"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-3 text-right text-xs tracking-widest text-[#9fb3a9]">
          RAUL_TRISTAN // PORTFOLIO v1.0
        </p>
      </div>
    </div>
  )
}
