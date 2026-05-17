import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Vision Experience',
    description: 'Immersive Apple inspired spatial interface built with React Three Fiber.'
  },
  {
    title: 'AI Motion System',
    description: 'Cinematic frontend animation architecture powered by GSAP.'
  }
]

export default function Projects() {
  return (
    <section id='projects' className='py-32 px-6 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl md:text-7xl font-semibold mb-20'>Selected Work</h2>

        <div className='grid md:grid-cols-2 gap-10'>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
