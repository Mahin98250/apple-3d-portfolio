export default function About() {
  return (
    <section id='about' className='py-32 px-6 lg:px-24'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-5xl md:text-7xl font-semibold mb-16'>About</h2>

        <p className='text-slate-300 text-xl leading-9'>
          I design cinematic web experiences combining immersive motion, Apple inspired interfaces and modern frontend engineering.
        </p>

        <div className='grid md:grid-cols-3 gap-8 mt-20'>
          {['React','Three.js','GSAP'].map((skill) => (
            <div key={skill} className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8'>
              <h3 className='text-2xl font-medium'>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
