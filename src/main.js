import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import FloatingNav from './components/FloatingNav';
import SmoothCursor from './components/SmoothCursor';
import HeroScene from './scenes/HeroScene';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className='min-h-screen bg-background text-white overflow-hidden relative'>
      <SmoothCursor />
      <FloatingNav />

      <section id='home' className='relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden'>
        <HeroScene />

        <div className='relative z-10'>
          <p className='uppercase tracking-[0.4em] text-slate-400 mb-6'>Creative Developer</p>

          <h1 className='text-6xl md:text-8xl font-semibold max-w-5xl leading-[0.95] bg-gradient-to-r from-white to-sky-300 text-transparent bg-clip-text'>
            Apple Inspired 3D Portfolio
          </h1>

          <p className='mt-8 text-slate-300 max-w-2xl text-lg leading-8 mx-auto'>
            Premium cinematic frontend engineering powered by React, GSAP and Three.js.
          </p>

          <button className='mt-10 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300'>
            Explore Work
          </button>
        </div>
      </section>

      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
