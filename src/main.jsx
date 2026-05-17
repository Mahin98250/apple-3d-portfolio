import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import gsap from 'gsap'
import './styles/globals.css'

function Section({ title, children }) {
  return (
    <section className='max-w-6xl mx-auto px-6 py-32 reveal'>
      <h2 className='text-4xl md:text-6xl font-semibold mb-10'>{title}</h2>
      {children}
    </section>
  )
}

function Card({ title, text }) {
  return (
    <div className='glass rounded-[28px] p-8 hover:-translate-y-2 transition-all duration-500'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-slate-300 mt-4 leading-7'>{text}</p>
    </div>
  )
}

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.hero-item',
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      }
    )

    gsap.fromTo(
      '.reveal',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.2,
        ease: 'power3.out'
      }
    )
  }, [])

  return (
    <main className='bg-background text-white min-h-screen overflow-x-hidden'>
      <header className='fixed top-6 left-1/2 -translate-x-1/2 z-50'>
        <nav className='glass rounded-full px-6 py-3 flex gap-6 text-sm'>
          <a href='#home'>Home</a>
          <a href='#projects'>Projects</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      <section id='home' className='min-h-screen flex flex-col justify-center items-center text-center px-6'>
        <p className='hero-item uppercase tracking-[0.4em] text-slate-400 mb-6'>Creative Developer</p>

        <h1 className='hero-item text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] max-w-5xl gradient-text'>
          Apple Inspired 3D Portfolio
        </h1>

        <p className='hero-item mt-8 text-slate-300 max-w-2xl text-lg leading-8'>
          Premium cinematic frontend engineering with immersive interactions and modern web experiences.
        </p>

        <button className='hero-item mt-10 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300'>
          Explore Work
        </button>
      </section>

      <Section title='Selected Work'>
        <div id='projects' className='grid md:grid-cols-2 gap-8'>
          <Card
            title='Spatial Interface'
            text='Immersive UI systems inspired by Apple product storytelling.'
          />

          <Card
            title='Motion Architecture'
            text='Premium cinematic interactions using modern frontend engineering.'
          />
        </div>
      </Section>

      <Section title='About'>
        <div id='about' className='grid md:grid-cols-3 gap-8'>
          <Card title='React' text='Modern component architecture and scalable UI systems.' />
          <Card title='GSAP' text='Smooth cinematic motion and premium animations.' />
          <Card title='Performance' text='Optimized rendering and responsive experiences.' />
        </div>
      </Section>

      <Section title='Contact'>
        <div id='contact' className='glass rounded-[32px] p-8 max-w-3xl'>
          <input placeholder='Your Name' className='w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-4 outline-none' />
          <input placeholder='Email Address' className='w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-4 outline-none' />
          <textarea rows='6' placeholder='Message' className='w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none'></textarea>

          <button className='mt-6 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300'>
            Send Message
          </button>
        </div>
      </Section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
