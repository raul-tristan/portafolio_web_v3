import { useState } from 'react'
import Cursor from '../sections/Cursor'
import Loader from '../sections/Loader'
import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Stack from '../sections/Stack'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'

export default function Home() {
  const [loading, setLoading] = useState(
    () => !new URLSearchParams(window.location.search).has('snap'),
  )

  return (
    <div className="min-h-screen bg-[#050505] text-[#e9f6ef] antialiased">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Cursor />
      <div className="crt-overlay" aria-hidden />
      <div className="crt-vignette" aria-hidden />
      <Nav />
      <main
        className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
