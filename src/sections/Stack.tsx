import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { stack } from '../data'

const GROUPS = [
  { key: 'front', title: '// front', items: stack.front },
  { key: 'back', title: '// back', items: stack.back },
  { key: 'data', title: '// data_&_tools', items: stack.data },
]

export default function Stack() {
  const marqueeItems = [...stack.front, ...stack.back, ...stack.data]

  return (
    <section id="stack" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader num="03" title="STACK_TÉCNICO" note="ls /usr/raul/skills" />
        <div className="grid gap-px bg-[rgba(0,244,142,0.16)] sm:grid-cols-3">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.key} delay={gi * 100} className="bg-[#050505]">
              <div className="h-full p-6 sm:p-8">
                <h3 className="mb-6 text-sm font-bold tracking-widest text-[#00f48e]">{g.title}</h3>
                <ul className="space-y-2.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      data-hover
                      className="group flex items-center gap-2 text-sm text-[#9fb3a9] transition-all duration-200 hover:translate-x-2 hover:text-[#e9f6ef]"
                    >
                      <span className="text-[#00f48e] opacity-0 transition-opacity group-hover:opacity-100">
                        &gt;
                      </span>
                      <span className="-ml-4 transition-all group-hover:ml-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* tech marquee */}
      <div className="mt-20 overflow-hidden border-y border-[rgba(0,244,142,0.16)] py-4">
        <div className="marquee-track slow gap-10 text-sm tracking-widest text-[#9fb3a9]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-10" aria-hidden={dup === 1}>
              {marqueeItems.map((t) => (
                <span key={`${dup}-${t}`} className="flex items-center gap-10">
                  <span className="transition-colors hover:text-[#00f48e]">{t}</span>
                  <span className="text-[#00f48e]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
