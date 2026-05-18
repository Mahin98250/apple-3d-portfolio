import { Link } from 'react-router-dom'

const demos = [
  'Procedural gradients',
  'Interactive particles',
  'Motion playgrounds',
  'Shader distortion',
  'Glassmorphism systems'
]

export default function ExperimentsPage() {
  return (
    <main className='min-h-screen bg-black px-6 py-28 text-white'>
      <div className='mx-auto max-w-7xl'>
        <Link to='/' className='text-sm text-white/50 hover:text-white'>
          ← Back Home
        </Link>

        <h1 className='mt-8 text-6xl font-semibold tracking-[-0.08em] md:text-[8rem]'>
          Experiments
        </h1>

        <div className='mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {demos.map((demo) => (
            <div
              key={demo}
              className='rounded-[34px] border border-white/10 bg-white/[0.03] p-8'
            >
              <div className='mb-8 h-40 rounded-[24px] bg-gradient-to-br from-cyan-400/10 to-violet-400/10' />

              <h2 className='text-3xl font-semibold tracking-[-0.04em]'>
                {demo}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
