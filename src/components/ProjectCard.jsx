export default function ProjectCard({ title, description }) {
  return (
    <article className='rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-500'>
      <div className='h-56 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 mb-8'></div>
      <h3 className='text-3xl font-semibold'>{title}</h3>
      <p className='mt-4 text-slate-400 leading-7'>{description}</p>
      <div className='mt-8 flex gap-4'>
        <button className='px-5 py-2 rounded-full bg-white text-black'>Live Demo</button>
        <button className='px-5 py-2 rounded-full border border-white/10'>GitHub</button>
      </div>
    </article>
  )
}
