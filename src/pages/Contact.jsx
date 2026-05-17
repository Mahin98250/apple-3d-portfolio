export default function Contact() {
  return (
    <section id='contact' className='py-32 px-6 lg:px-24'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-5xl md:text-7xl font-semibold mb-16'>Contact</h2>

        <form className='space-y-6'>
          <input type='text' placeholder='Your name' className='w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 outline-none backdrop-blur-xl' />
          <input type='email' placeholder='Email address' className='w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 outline-none backdrop-blur-xl' />
          <textarea rows='6' placeholder='Message' className='w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 outline-none backdrop-blur-xl'></textarea>

          <button className='px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
