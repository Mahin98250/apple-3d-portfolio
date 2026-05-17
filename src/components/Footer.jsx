export default function Footer() {
  return (
    <footer className='border-t border-white/10 py-10 px-6 lg:px-24 mt-20'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-slate-400'>
        <p>© 2026 Apple Inspired Portfolio</p>

        <div className='flex gap-6'>
          <a href='https://github.com' target='_blank'>GitHub</a>
          <a href='https://linkedin.com' target='_blank'>LinkedIn</a>
          <a href='https://twitter.com' target='_blank'>Twitter</a>
        </div>
      </div>
    </footer>
  )
}
