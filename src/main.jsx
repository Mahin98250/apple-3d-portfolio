import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import gsap from 'gsap'
import './styles/globals.css'

const skills = [
  'HTML',
  'CSS',
  'C',
  'Scratch',
  'AI Tools',
  'Problem Solving',
  'Logical Thinking',
  'Self Learning',
  'AI Development',
  'Prompt Engineering'
]

const projects = [
  {
    title: 'Animals Project',
    description: 'A simple educational website about animals.'
  },
  {
    title: 'Birthday Card',
    description: 'Creative animated birthday card experience.'
  },
  {
    title: 'Cafe Nova',
    description: 'Modern cafe website design with responsive UI.'
  },
  {
    title: 'Forms Project',
    description: 'Interactive form layouts and frontend validation.'
  },
  {
    title: 'ID Card Designs',
    description: 'Multiple custom ID card UI concepts.'
  },
  {
    title: 'Royal Hospital',
    description: 'Professional hospital website interface.'
  }
]

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.hero-item',
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      }
    )

    gsap.fromTo(
      '.card-reveal',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      }
    )
  }, [])

  return (
    <main className='bg-background text-white overflow-x-hidden'>
      <header className='fixed top-6 left-1/2 -translate-x-1/2 z-50'>
        <nav className='glass rounded-full px-6 py-3 flex gap-6 text-sm'>
          <a href='#home'>Home</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      <section id='home' className='min-h-screen flex flex-col justify-center items-center text-center px-6 relative'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_50%)]'></div>

        <p className='hero-item uppercase tracking-[0.4em] text-slate-400 mb-6 relative z-10'>
          Student • Developer • AI Explorer
        </p>

        <h1 className='hero-item text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] max-w-6xl gradient-text relative z-10'>
          Hi, I'm Mahin 👋
        </h1>

        <p className='hero-item mt-8 text-slate-300 max-w-3xl text-lg leading-8 relative z-10'>
          Student passionate about Web Development, AI and building real-world projects with modern frontend engineering.
        </p>

        <button className='hero-item mt-10 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300 relative z-10'>
          Explore Projects
        </button>
      </section>

      <section id='skills' className='max-w-7xl mx-auto px-6 py-32'>
        <h2 className='text-4xl md:text-6xl font-semibold mb-16'>Skills</h2>

        <div className='flex flex-wrap gap-4'>
          {skills.map((skill) => (
            <div
              key={skill}
              className='card-reveal glass px-6 py-4 rounded-full text-slate-200 hover:scale-105 transition-all duration-300'
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id='projects' className='max-w-7xl mx-auto px-6 py-32'>
        <h2 className='text-4xl md:text-6xl font-semibold mb-16'>Projects</h2>

        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='card-reveal glass rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-500'
            >
              <div className='h-44 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 mb-8'></div>

              <h3 className='text-3xl font-semibold'>{project.title}</h3>

              <p className='mt-4 text-slate-300 leading-7'>
                {project.description}
              </p>

              <button className='mt-8 px-5 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300'>
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id='contact' className='max-w-5xl mx-auto px-6 py-32'>
        <div className='glass rounded-[36px] p-10 md:p-16'>
          <h2 className='text-4xl md:text-6xl font-semibold mb-10'>Contact</h2>

          <div className='space-y-5'>
            <input
              placeholder='Your Name'
              className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none'
            />

            <input
              placeholder='Email Address'
              className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none'
            />

            <textarea
              rows='6'
              placeholder='Message'
              className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none'
            ></textarea>

            <button className='px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300'>
              Send Message
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
