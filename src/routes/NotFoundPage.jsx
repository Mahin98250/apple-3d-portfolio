import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white'>
      <p className='text-sm uppercase tracking-[0.3em] text-white/40'>404</p>

      <h1 className='mt-6 text-center text-6xl font-semibold tracking-[-0.08em] md:text-[8rem]'>
        Lost in Space
      </h1>

      <Link
        to='/'
        className='mt-10 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black'
      >
        Return Home
      </Link>
    </main>
  )
}
