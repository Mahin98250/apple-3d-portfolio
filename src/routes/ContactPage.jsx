import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-black px-6 py-28 text-white'>
      <div className='mx-auto max-w-5xl'>
        <Link to='/' className='text-sm text-white/50 hover:text-white'>
          ← Back Home
        </Link>

        <h1 className='mt-8 text-6xl font-semibold tracking-[-0.08em] md:text-[8rem]'>
          Contact
        </h1>

        <div className='mt-20 rounded-[40px] border border-white/10 bg-white/[0.03] p-10'>
          <div className='grid gap-5'>
            <input
              placeholder='Your Name'
              className='rounded-2xl border border-white/10 bg-white/5 px-6 py-5 outline-none placeholder:text-white/30'
            />

            <input
              placeholder='Email Address'
              className='rounded-2xl border border-white/10 bg-white/5 px-6 py-5 outline-none placeholder:text-white/30'
            />

            <textarea
              rows='6'
              placeholder='Message'
              className='rounded-2xl border border-white/10 bg-white/5 px-6 py-5 outline-none placeholder:text-white/30'
            />

            <button className='w-fit rounded-full bg-white px-8 py-4 text-sm font-semibold text-black'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
