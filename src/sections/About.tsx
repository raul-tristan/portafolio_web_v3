import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const STATS = [
  { value: '4+', label: 'años de experiencia' },
  { value: '7', label: 'empresas y equipos' },
  { value: '15+', label: 'tecnologías dominadas' },
  { value: '02', label: 'idiomas' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8">
      <SectionHeader num="01" title="SOBRE_MÍ" note="cat README.md" />
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="border-l-2 border-[#00f48e] pl-5 text-sm leading-7 text-[#9fb3a9] sm:text-base sm:leading-8">
            Desarrollador Full Stack con pasión por la programación y la resolución de desafíos
            técnicos. Construyo soluciones sobre una base sólida y diversa que abarca una amplia
            variedad de lenguajes, frameworks y tecnologías.
          </p>
          <p className="mt-6 pl-5 text-sm leading-7 text-[#9fb3a9] sm:text-base sm:leading-8">
            He pasado por el sector público, consultoras y empresas de tecnología — del soporte de
            redes al desarrollo completo de plataformas. Esa ruta me enseñó a entender el sistema
            entero, no solo mi parte del código.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-px bg-[rgba(0,244,142,0.16)]">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-[#050505]">
              <div className="group h-full p-6 transition-colors hover:bg-[rgba(0,244,142,0.05)] sm:p-8">
                <p className="glow text-4xl font-extrabold text-[#00f48e] sm:text-5xl">{s.value}</p>
                <p className="mt-3 text-xs tracking-widest text-[#9fb3a9]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
