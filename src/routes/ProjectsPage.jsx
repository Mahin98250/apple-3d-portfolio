import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Apple 3D Portfolio',
    description: 'Cinematic motion portfolio with WebGL atmosphere.'
  },
  {
    title: 'AI Motion UI',
    description: 'Experimental interface concepts and animation systems.'
  },
  {
    title: 'Creative WebGL Lab',
    description: 'Shader experiments and GPU-driven visuals.'
  }
]

export default function ProjectsPage() {
  return (
    <main className='min-h-screen bg-black px-6 py-28 text-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-20'>
          <Link to='/' className='text-sm text-white/50 hover:text-white'>
            ← Back Home
          </Link>

          <h1 className='mt-8 text-6xl font-semibold tracking-[-0.08em] md:text-[8rem]'>
            Projects
          </h1>
        </div>

        <div className='grid gap-8'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 transition-all duration-700 hover:-translate-y-1'
            >
              <div className='absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_28%)]' />

              <div className='relative z-10'>
                <p className='text-sm uppercase tracking-[0.3em] text-white/40'>Featured Work</p>

                <h2 className='mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-6xl'>
                  {project.title}
                </h2>

                <p className='mt-6 max-w-2xl text-lg leading-8 text-white/65'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
