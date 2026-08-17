import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { softSkills, languages } from '../data'

export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8">
      <SectionHeader num="05" title="HABILIDADES_&_FORMACIÓN" note="cat about.config" />
      <div className="grid gap-12 md:grid-cols-3">
        {/* soft skills */}
        <Reveal>
          <h3 className="mb-6 text-sm font-bold tracking-widest text-[#00f48e]">
            {'// habilidades'}
          </h3>
          <ul className="space-y-3">
            {softSkills.map((s) => (
              <li key={s} className="flex gap-3 text-sm text-[#9fb3a9]">
                <span className="text-[#00f48e]">▸</span>
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* languages */}
        <Reveal delay={100}>
          <h3 className="mb-6 text-sm font-bold tracking-widest text-[#00f48e]">{'// idiomas'}</h3>
          <div className="space-y-6">
            {languages.map((l) => (
              <div key={l.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-[#e9f6ef]">{l.name}</span>
                  <span className="text-xs text-[#9fb3a9]">{l.level}</span>
                </div>
                <div className="h-1.5 w-full bg-[rgba(0,244,142,0.12)]">
                  <div
                    className="h-full bg-[#00f48e] shadow-[0_0_8px_#00f48e]"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* education */}
        <Reveal delay={200}>
          <h3 className="mb-6 text-sm font-bold tracking-widest text-[#00f48e]">{'// formación'}</h3>
          <div className="term-frame p-5">
            <p className="text-xs tracking-widest text-[#9fb3a9]">2015 — 2020</p>
            <p className="mt-2 text-base font-bold text-[#e9f6ef]">Universidad de Huánuco</p>
            <p className="mt-1 text-sm text-[#00f48e]">
              &gt; Bachiller en Ingeniería de Sistemas e Informática
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
