import { useEffect, useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { experience } from '../data'

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = (vh * 0.75 - rect.top) / rect.height
      setProgress(Math.max(0, Math.min(1, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="experiencia" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8">
      <SectionHeader num="02" title="EXPERIENCIA" note="git log --career" />
      <div ref={listRef} className="relative pl-8 sm:pl-12">
        {/* scroll-drawn timeline */}
        <svg
          className="absolute left-2 top-0 h-full w-4 sm:left-4"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <line x1="2" y1="0" x2="2" y2="100" stroke="rgba(0,244,142,0.14)" strokeWidth="1" />
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100"
            stroke="#00f48e"
            strokeWidth="1"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - progress}
            style={{ filter: 'drop-shadow(0 0 4px #00f48e)' }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={Math.min(i * 60, 180)}>
              <article className="group relative">
                {/* node marker */}
                <span
                  className={`absolute -left-[26px] top-1.5 h-2.5 w-2.5 rotate-45 border sm:-left-[34px] ${
                    job.current
                      ? 'border-[#00f48e] bg-[#00f48e] shadow-[0_0_10px_#00f48e]'
                      : 'border-[rgba(0,244,142,0.5)] bg-[#050505]'
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className={`text-xs tracking-widest ${
                      job.current ? 'glow text-[#00f48e]' : 'text-[#9fb3a9]'
                    }`}
                  >
                    {job.period}
                    {job.current && (
                      <span className="ml-2 border border-[#00f48e] px-1.5 py-0.5 text-[10px] text-[#00f48e]">
                        ACTUAL
                      </span>
                    )}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-[#e9f6ef] transition-colors group-hover:text-[#00f48e] sm:text-2xl">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-[#00f48e]">&gt; {job.role}</p>
                <ul className="mt-4 space-y-1.5">
                  {job.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-xs leading-6 text-[#9fb3a9] sm:text-sm sm:leading-6"
                    >
                      <span className="mt-0.5 shrink-0 text-[#00f48e]">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
