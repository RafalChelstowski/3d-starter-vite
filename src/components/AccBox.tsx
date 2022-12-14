import { Html } from '@react-three/drei';
import { useQuery } from '@tanstack/react-query';
import { accelerometerSensor } from '~/api/accelerometerSensor';
import { QueryClientContext } from '~/App';

export function AccBox() {
  const { data: accelerometerData } = useQuery(['accelerometer'], accelerometerSensor, {
    context: QueryClientContext,
  });

  return (
    <group position={[-1, 0, 0]}>
      <Html>
        <p>x: {accelerometerData?.x || 'unavailable'}</p>
      </Html>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='pink' />
      </mesh>
    </group>
  );
}
