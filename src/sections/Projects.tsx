import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8">
      <SectionHeader num="04" title="PROYECTOS" note="git log --projects --oneline" />
      <div className="border-t border-[rgba(0,244,142,0.16)]">
        {projects.map((p, i) => (
          <Reveal key={p.index} delay={Math.min(i * 70, 200)}>
            <article
              data-hover
              className="group border-b border-[rgba(0,244,142,0.16)] py-8 transition-colors duration-300 hover:bg-[rgba(0,244,142,0.04)] sm:py-10"
            >
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 px-2 sm:px-4">
                <span className="glow text-sm font-bold text-[#00f48e]">{p.index}</span>
                <h3 className="flex-1 text-xl font-extrabold tracking-tight text-[#e9f6ef] transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl md:text-4xl">
                  {p.title}
                </h3>
                <div className="text-right text-xs tracking-widest text-[#9fb3a9]">
                  <p className="text-[#00f48e]">{p.type}</p>
                  <p>{p.year}</p>
                </div>
              </div>
              <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="px-2 pt-5 sm:px-4 sm:pl-14">
                    <p className="max-w-2xl text-sm leading-7 text-[#9fb3a9]">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-[rgba(0,244,142,0.3)] px-2.5 py-1 text-[10px] tracking-widest text-[#00f48e]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mt-8 text-xs tracking-widest text-[#9fb3a9]">
          <span className="text-[#00f48e]">&gt;</span> pasa el cursor sobre cada proyecto para ver el
          detalle
        </p>
      </Reveal>
    </section>
  )
}
