import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

function Orb() {
  const mesh = useRef()

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.elapsedTime * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2, 32]} />
        <MeshDistortMaterial color='#7dd3fc' distort={0.35} speed={2} />
      </mesh>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className='absolute inset-0 opacity-70'>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={3} />
        <Orb />
      </Canvas>
    </div>
  )
}
