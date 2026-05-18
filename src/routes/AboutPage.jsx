import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-black px-6 py-28 text-white'>
      <div className='mx-auto max-w-6xl'>
        <Link to='/' className='text-sm text-white/50 hover:text-white'>
          ← Back Home
        </Link>

        <h1 className='mt-8 text-6xl font-semibold tracking-[-0.08em] md:text-[8rem]'>
          About
        </h1>

        <div className='mt-20 grid gap-8 md:grid-cols-2'>
          <div className='rounded-[36px] border border-white/10 bg-white/[0.03] p-10'>
            <p className='text-sm uppercase tracking-[0.3em] text-white/40'>Journey</p>

            <h2 className='mt-6 text-4xl font-semibold tracking-[-0.04em]'>
              Student building cinematic interfaces.
            </h2>
          </div>

          <div className='rounded-[36px] border border-white/10 bg-white/[0.03] p-10'>
            <p className='text-lg leading-8 text-white/65'>
              Focused on React, motion systems, WebGL visuals, modern frontend engineering and AI-driven creative development.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
