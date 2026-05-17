import React, { useEffect, useMemo, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import './styles/globals.css'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  'HTML',
  'CSS',
  'C',
  'Scratch',
  'AI Tools',
  'Problem Solving',
  'Logical Thinking',
  'Self Learning',
  'AI Development',
  'Prompt Engineering'
]

const projects = [
  {
    title: 'Animals Project',
    description: 'A simple educational website about animals.'
  },
  {
    title: 'Birthday Card',
    description: 'Creative animated birthday card experience.'
  },
  {
    title: 'Cafe Nova',
    description: 'Modern cafe website design with responsive UI.'
  },
  {
    title: 'Forms Project',
    description: 'Interactive form layouts and frontend validation.'
  },
  {
    title: 'ID Card Designs',
    description: 'Multiple custom ID card UI concepts.'
  },
  {
    title: 'Royal Hospital',
    description: 'Professional hospital website interface.'
  }
]

const story = [
  {
    eyebrow: '01',
    title: 'Cinematic first impression',
    text:
      'Oversized typography, layered lighting and soft depth cues create a premium landing experience.'
  },
  {
    eyebrow: '02',
    title: 'Scroll becomes the narrative',
    text:
      'Pinned moments and timed reveals guide the viewer through skills, projects and contact in a controlled flow.'
  },
  {
    eyebrow: '03',
    title: 'Depth, glass and motion',
    text:
      'Floating cards, hover physics and ambient motion keep the interface alive without overwhelming the content.'
  }
]

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: false
    })

    lenis.on('scroll', ScrollTrigger.update)

    let rafId = 0

    const raf = (time) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }

    rafId = window.requestAnimationFrame(raf)

    const onResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      lenis.destroy()
    }
  }, [])
}

function useHeroAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })

      intro
        .from('.nav-shell', { y: -24, opacity: 0, duration: 0.8 })
        .from('.hero-kicker', { y: 28, opacity: 0, duration: 0.8 }, 0.1)
        .from('.hero-title span', { yPercent: 110, opacity: 0, stagger: 0.04, duration: 1 }, 0.15)
        .from('.hero-copy', { y: 28, opacity: 0, duration: 0.8 }, 0.35)
        .from('.hero-actions', { y: 20, opacity: 0, duration: 0.7 }, 0.5)
        .from('.hero-stats .stat-card', { y: 40, opacity: 0, stagger: 0.12, duration: 0.9 }, 0.55)

      gsap.utils.toArray('.reveal-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, rotateX: 8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%'
            },
            delay: index * 0.04
          }
        )
      })

      gsap.to('.ambient-float', {
        y: -20,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.25
      })

      gsap.to('.mesh-glow', {
        x: '+=40',
        y: '+=22',
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    })

    return () => ctx.revert()
  }, [])
}

function ParticleAtmosphere() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return undefined

    const particleCount = 110
    const pointer = { x: 0.5, y: 0.35, active: false }
    let width = 0
    let height = 0
    let rafId = 0

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      speed: 0.00018 + Math.random() * 0.0005,
      radius: 0.7 + Math.random() * 2.2,
      hue: 192 + Math.random() * 42
    }))

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const scale = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * scale
      canvas.height = height * scale
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(scale, 0, 0, scale, 0, 0)
    }

    const onPointerMove = (event) => {
      pointer.x = event.clientX / width
      pointer.y = event.clientY / height
      pointer.active = true
    }

    const onPointerLeave = () => {
      pointer.active = false
    }

    const render = (time) => {
      context.clearRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        const wave = Math.sin(time * 0.0007 + particle.y * 12 + index) * 0.0005
        particle.y -= particle.speed + wave
        if (particle.y < -0.08) {
          particle.y = 1.08
          particle.x = Math.random()
        }

        const depth = 0.25 + particle.z * 0.9
        const xDrift = (Math.sin(time * 0.0003 + particle.y * 8) * 0.02) / depth
        const yDrift = Math.cos(time * 0.00022 + particle.x * 6) * 0.01
        const mousePull = pointer.active
          ? {
              x: (pointer.x - particle.x) * 0.04 * depth,
              y: (pointer.y - particle.y) * 0.04 * depth
            }
          : { x: 0, y: 0 }

        const x = (particle.x + xDrift + mousePull.x) * width
        const y = (particle.y + yDrift + mousePull.y) * height
        const size = particle.radius * (1 + depth * 1.4)
        const alpha = clamp(0.08 + depth * 0.35, 0.08, 0.44)

        const gradient = context.createRadialGradient(x, y, 0, x, y, size * 4)
        gradient.addColorStop(0, `hsla(${particle.hue}, 95%, 70%, ${alpha})`)
        gradient.addColorStop(1, 'rgba(125, 211, 252, 0)')

        context.fillStyle = gradient
        context.beginPath()
        context.arc(x, y, size * 2, 0, Math.PI * 2)
        context.fill()
      })

      rafId = window.requestAnimationFrame(render)
    }

    resize()
    render(0)

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className='pointer-events-none absolute inset-0 h-full w-full opacity-90' aria-hidden='true' />
}

function WebGLScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const gl = canvas.getContext('webgl', {
      antialias: true,
      alpha: true,
      premultipliedAlpha: false
    })

    if (!gl) return undefined

    const vertexSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    const fragmentSource = `
      precision highp float;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform vec2 uMouse;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 center = uv - 0.5;
        center.x *= uResolution.x / uResolution.y;

        float time = uTime * 0.00012;
        float n = noise(uv * 4.0 + vec2(time * 2.0, -time));
        float swirl = sin((center.x + center.y) * 4.0 + time * 6.0) * 0.03;
        float mouseGlow = 0.18 / max(0.10, length(uv - uMouse));

        vec3 base = vec3(0.02, 0.04, 0.10);
        vec3 teal = vec3(0.37, 0.83, 0.96);
        vec3 blue = vec3(0.26, 0.41, 0.95);
        vec3 violet = vec3(0.58, 0.39, 0.97);

        float gradient = smoothstep(0.7, -0.2, length(center + swirl));
        vec3 color = mix(base, teal, gradient * 0.45);
        color = mix(color, blue, smoothstep(0.2, 0.95, n + swirl + 0.15));
        color += violet * 0.06 * sin(uv.y * 6.0 + time * 7.0);
        color += mouseGlow * vec3(0.12, 0.18, 0.24);

        float distortion = sin((uv.x + uv.y + time) * 24.0) * 0.01;
        color += distortion;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const createShader = (type, source) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexSource)
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentSource)
    if (!vertexShader || !fragmentShader) return undefined

    const program = gl.createProgram()
    if (!program) return undefined

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined

    const vertices = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1
    ])

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, 'position')
    const resolutionLocation = gl.getUniformLocation(program, 'uResolution')
    const timeLocation = gl.getUniformLocation(program, 'uTime')
    const mouseLocation = gl.getUniformLocation(program, 'uMouse')

    const state = { mouseX: 0.5, mouseY: 0.4 }
    let width = 0
    let height = 0
    let rafId = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const scale = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * scale
      canvas.height = height * scale
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const onPointerMove = (event) => {
      state.mouseX = event.clientX / width
      state.mouseY = 1 - event.clientY / height
    }

    const draw = (time) => {
      gl.useProgram(program)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, time)
      gl.uniform2f(mouseLocation, state.mouseX, state.mouseY)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      rafId = window.requestAnimationFrame(draw)
    }

    resize()
    draw(0)

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      gl.deleteProgram(program)
    }
  }, [])

  return <canvas ref={canvasRef} className='pointer-events-none absolute inset-0 h-full w-full opacity-90 mix-blend-screen' aria-hidden='true' />
}

function HoverPhysicsCard({ children, className = '' }) {
  const cardRef = useRef(null)

  const handleMove = (event) => {
    const node = cardRef.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    const rotateY = (x - 0.5) * 12
    const rotateX = (0.5 - y) * 12

    node.style.setProperty('--card-rotate-x', `${rotateX}deg`)
    node.style.setProperty('--card-rotate-y', `${rotateY}deg`)
    node.style.setProperty('--card-lift', '10px')
    node.style.setProperty('--card-shine-x', `${x * 100}%`)
    node.style.setProperty('--card-shine-y', `${y * 100}%`)
  }

  const handleLeave = () => {
    const node = cardRef.current
    if (!node) return

    node.style.setProperty('--card-rotate-x', '0deg')
    node.style.setProperty('--card-rotate-y', '0deg')
    node.style.setProperty('--card-lift', '0px')
    node.style.setProperty('--card-shine-x', '50%')
    node.style.setProperty('--card-shine-y', '50%')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`motion-card reveal-card ${className}`}
    >
      {children}
    </div>
  )
}

function App() {
  useLenisScroll()
  useHeroAnimation()

  const headline = useMemo(
    () => 'Mahin builds cinematic, motion-rich interfaces with depth and soul.',
    []
  )

  return (
    <main className='site-shell bg-background text-white overflow-x-hidden'>
      <div className='fixed inset-0 -z-20 overflow-hidden'>
        <WebGLScene />
        <div className='mesh-glow absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl' />
        <div className='mesh-glow absolute right-12 top-16 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl' />
      </div>

      <ParticleAtmosphere />

      <header className='nav-shell fixed left-1/2 top-5 z-50 w-[min(92vw,1040px)] -translate-x-1/2'>
        <nav className='glass-panel flex items-center justify-between gap-4 rounded-full px-5 py-3'>
          <a href='#home' className='text-sm uppercase tracking-[0.25em] text-white/90'>
            Mahin
          </a>

          <div className='hidden md:flex items-center gap-6 text-sm text-white/70'>
            <a href='#story'>Story</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </div>

          <a
            href='https://github.com/Mahin98250'
            target='_blank'
            rel='noreferrer'
            className='rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]'
          >
            GitHub
          </a>
        </nav>
      </header>

      <section id='home' className='relative min-h-screen overflow-hidden px-6 pt-28'>
        <div className='section-shell mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center pb-24 pt-24'>
          <p className='hero-kicker mb-6 max-w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cyan-100/80 backdrop-blur-xl'>
            Student • Developer • AI Explorer
          </p>

          <h1 className='hero-title max-w-6xl text-6xl font-semibold tracking-[-0.06em] text-white md:text-8xl lg:text-[8.6rem] xl:text-[9.4rem]'>
            {headline.split(' ').map((word, index) => (
              <span key={`${word}-${index}`} className='inline-block leading-[0.88]'>
                {word}&nbsp;
              </span>
            ))}
          </h1>

          <p className='hero-copy mt-8 max-w-3xl text-lg leading-8 text-white/72 md:text-xl'>
            A cinematic 3D-inspired portfolio with floating particles, WebGL atmosphere, smooth
            Lenis scrolling, glass layering and scroll-driven storytelling.
          </p>

          <div className='hero-actions mt-10 flex flex-wrap gap-4'>
            <a
              href='#projects'
              className='rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]'
            >
              Explore Projects
            </a>
            <a
              href='#contact'
              className='rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-transform duration-300 hover:scale-[1.03]'
            >
              Contact Me
            </a>
          </div>

          <div className='hero-stats mt-14 grid gap-4 md:grid-cols-3'>
            <div className='stat-card glass-panel rounded-[28px] p-6'>
              <p className='text-xs uppercase tracking-[0.35em] text-white/45'>Focus</p>
              <p className='mt-4 text-2xl font-semibold'>Frontend + AI</p>
              <p className='mt-2 text-sm leading-6 text-white/65'>
                Building visually rich interfaces with modern motion systems.
              </p>
            </div>

            <div className='stat-card glass-panel rounded-[28px] p-6'>
              <p className='text-xs uppercase tracking-[0.35em] text-white/45'>Stack</p>
              <p className='mt-4 text-2xl font-semibold'>React + GSAP</p>
              <p className='mt-2 text-sm leading-6 text-white/65'>
                Smooth animation orchestration with depth and performance in mind.
              </p>
            </div>

            <div className='stat-card glass-panel rounded-[28px] p-6'>
              <p className='text-xs uppercase tracking-[0.35em] text-white/45'>Style</p>
              <p className='mt-4 text-2xl font-semibold'>Apple-inspired</p>
              <p className='mt-2 text-sm leading-6 text-white/65'>
                Clean, premium, layered, and built to feel cinematic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='story' className='mx-auto max-w-7xl px-6 py-28 md:py-36'>
        <div className='mb-10 max-w-3xl'>
          <p className='text-xs uppercase tracking-[0.35em] text-cyan-100/60'>Scroll Storytelling</p>
          <h2 className='mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl'>
            Pinned moments that move like a film.
          </h2>
        </div>

        <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='space-y-6'>
            {story.map((item, index) => (
              <article
                key={item.title}
                className='story-step glass-panel sticky top-24 rounded-[32px] p-8 md:p-10'
                style={{ marginTop: index === 0 ? 0 : '16px' }}
              >
                <p className='text-xs uppercase tracking-[0.35em] text-cyan-100/55'>
                  {item.eyebrow}
                </p>
                <h3 className='mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl'>
                  {item.title}
                </h3>
                <p className='mt-4 max-w-xl text-base leading-7 text-white/68 md:text-lg'>
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className='space-y-6'>
            <HoverPhysicsCard className='glass-panel rounded-[32px] p-8 md:p-10'>
              <p className='text-xs uppercase tracking-[0.35em] text-white/45'>Motion system</p>
              <h3 className='mt-4 text-3xl font-semibold tracking-[-0.04em]'>Dynamic hover physics</h3>
              <p className='mt-4 text-base leading-7 text-white/68'>
                Cards tilt, lift and catch light when the pointer moves across them.
              </p>
            </HoverPhysicsCard>

            <HoverPhysicsCard className='glass-panel rounded-[32px] p-8 md:p-10'>
              <p className='text-xs uppercase tracking-[0.35em] text-white/45'>Depth layering</p>
              <h3 className='mt-4 text-3xl font-semibold tracking-[-0.04em]'>Glass, blur and shadow</h3>
              <p className='mt-4 text-base leading-7 text-white/68'>
                Multiple translucent layers build a premium visual stack with ambient depth.
              </p>
            </HoverPhysicsCard>
          </div>
        </div>
      </section>

      <section id='skills' className='mx-auto max-w-7xl px-6 py-28 md:py-36'>
        <div className='mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='text-xs uppercase tracking-[0.35em] text-cyan-100/60'>Advanced Typography</p>
            <h2 className='mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl'>
              Oversized headlines. Tight spacing. Clear rhythm.
            </h2>
          </div>
          <p className='max-w-xl text-sm leading-7 text-white/60 md:text-base'>
            Responsive type scaling keeps the composition cinematic on mobile, tablet and desktop.
          </p>
        </div>

        <div className='flex flex-wrap gap-4'>
          {skills.map((skill) => (
            <div
              key={skill}
              className='reveal-card glass-panel rounded-full px-6 py-4 text-sm tracking-wide text-white/82 transition-transform duration-300 hover:-translate-y-1'
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id='projects' className='mx-auto max-w-7xl px-6 py-28 md:py-36'>
        <div className='mb-12 max-w-3xl'>
          <p className='text-xs uppercase tracking-[0.35em] text-cyan-100/60'>Projects</p>
          <h2 className='mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl'>
            Scroll-driven showcases with layered depth.
          </h2>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, index) => (
            <HoverPhysicsCard
              key={project.title}
              className='glass-panel relative overflow-hidden rounded-[34px] p-7 md:p-8'
            >
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_28%)]' />
              <div className='relative z-10'>
                <div className='mb-8 h-44 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] shadow-[0_30px_80px_rgba(0,0,0,0.32)]' />
                <p className='text-xs uppercase tracking-[0.35em] text-white/45'>0{index + 1}</p>
                <h3 className='mt-4 text-3xl font-semibold tracking-[-0.04em]'>{project.title}</h3>
                <p className='mt-4 text-base leading-7 text-white/68'>{project.description}</p>
                <button className='mt-8 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]'>
                  View Project
                </button>
              </div>
            </HoverPhysicsCard>
          ))}
        </div>
      </section>

      <section id='contact' className='mx-auto max-w-6xl px-6 py-28 pb-36 md:py-36'>
        <div className='glass-panel rounded-[38px] p-8 md:p-14'>
          <p className='text-xs uppercase tracking-[0.35em] text-cyan-100/60'>Contact</p>
          <h2 className='mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl'>
            Let’s build something polished.
          </h2>
          <p className='mt-5 max-w-2xl text-base leading-7 text-white/65'>
            Send a note if you want to collaborate on a website, portfolio, or UI concept.
          </p>

          <div className='mt-10 grid gap-5'>
            <input
              placeholder='Your Name'
              className='w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 outline-none placeholder:text-white/30 focus:border-cyan-200/30'
            />
            <input
              placeholder='Email Address'
              className='w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 outline-none placeholder:text-white/30 focus:border-cyan-200/30'
            />
            <textarea
              rows='6'
              placeholder='Message'
              className='w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 outline-none placeholder:text-white/30 focus:border-cyan-200/30'
            />
            <button className='w-fit rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]'>
              Send Message
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
