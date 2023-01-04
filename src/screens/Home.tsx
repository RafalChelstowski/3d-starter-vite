import { Canvas } from '@react-three/fiber';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { GeoBox } from '~/components/GeoBox';
import { accelerometerSensor } from '~/api/accelerometerSensor';
import { QueryClientContext } from '~/App';
import { AccBox } from '~/components/AccBox';

export function Home() {
  accelerometerSensor();

  const ContextBridge = useContextBridge(QueryClientContext);

  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <ContextBridge>
          <ambientLight />
          <pointLight position={[2, 2, 2]} />
          <GeoBox />
          <AccBox />
          <OrbitControls />
        </ContextBridge>
      </Canvas>
    </div>
  );
}
