import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';

function App() {
  return (
    <main className='min-h-screen bg-background text-white overflow-hidden'>
      <section className='h-screen flex flex-col items-center justify-center text-center px-6'>
        <p className='uppercase tracking-[0.4em] text-slate-400 mb-6'>Creative Developer</p>
        <h1 className='text-6xl md:text-8xl font-semibold max-w-5xl leading-[0.95]'>
          Apple Inspired 3D Portfolio
        </h1>
        <p className='mt-8 text-slate-300 max-w-2xl text-lg'>
          Cinematic frontend engineering with React, GSAP and Three.js.
        </p>
        <button className='mt-10 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300'>
          Explore Work
        </button>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
