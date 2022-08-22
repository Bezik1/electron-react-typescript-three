import React, { useState, useRef } from 'react';
import { Color, Mesh } from 'three'

import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface BoxProps {
  color: Color
}

const Box = (props: BoxProps) =>{
  const { color } = props

  const meshRef = useRef<Mesh>(null!)
  const [clicked, click] = useState(false)

  useFrame(() =>{
    meshRef.current.rotation.y -= 0.02
    meshRef.current.rotation.x -= 0.02
    meshRef.current.rotation.z -= 0.02
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={color} />
    </mesh>
  )
}

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <Canvas>
          <ambientLight color={new Color('#0000ff')} intensity={0.06} />
          <pointLight color={new Color('#0000ff')} intensity={20} position={[1, 1, 1]}/>
          <OrbitControls />
          <Box color={new Color('ff0000')} />
        </Canvas>
      </header>
    </div>
  );
}

export default App;
