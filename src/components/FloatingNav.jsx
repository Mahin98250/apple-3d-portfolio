export default function FloatingNav() {
  return (
    <header className='fixed top-6 left-1/2 -translate-x-1/2 z-50'>
      <nav className='backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-3 flex gap-6 text-sm'>
        <a href='#home' className='text-white'>Home</a>
        <a href='#projects' className='text-slate-400'>Projects</a>
        <a href='#about' className='text-slate-400'>About</a>
        <a href='#contact' className='text-slate-400'>Contact</a>
      </nav>
    </header>
  )
}
