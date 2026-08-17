import Reveal from './Reveal'

interface Props {
  num: string
  title: string
  note?: string
}

export default function SectionHeader({ num, title, note }: Props) {
  return (
    <Reveal>
      <div className="mb-14 flex items-end gap-5 sm:gap-8">
        <span className="glow text-5xl font-extrabold leading-none text-[#00f48e] sm:text-7xl">
          {num}
        </span>
        <div className="flex-1">
          <h2 className="text-xl font-bold tracking-[0.25em] text-[#e9f6ef] sm:text-3xl">
            {title}
          </h2>
          {note && <p className="mt-1 text-xs tracking-widest text-[#9fb3a9]">{note}</p>}
        </div>
        <span className="mb-2 hidden h-px flex-1 bg-[rgba(0,244,142,0.16)] sm:block" />
        <span className="mb-2 hidden text-xs text-[#00f48e] sm:block">{'//'}</span>
      </div>
    </Reveal>
  )
}
