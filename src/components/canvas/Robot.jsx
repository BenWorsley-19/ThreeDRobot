import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Robot = ({ isMobile }) => {
  const robot = useGLTF('./robot/robot_v9.glb')
  return (
    <mesh>
      <hemisphereLight 
        intensity={2.5}
        groundColor="green" 
      />
      <spotLight
        position={isMobile ? [0, -6, -2.2] : [0, -7, 0]}
        angle={1}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={robot.scene}
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[-0.1, 1.3, 0.1]}
      />  
    </mesh>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // changes the isMobile state based on the window size
  useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 500px)');
      setIsMobile(mediaQuery.matches); 
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
  }, [])  

  return (
    <Canvas 
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 19,
        near: 0.1,
        far: 200,
        position: [20, 3, 6],
      }}
      // camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}  
        />
        <Robot isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default RobotCanvas