import * as THREE from "three";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Background } from "./components/Three/Background.tsx";
import { Lens } from "./components/Three/Lens.tsx";

function App() {
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.001,
    1000,
  );
  camera.position.set(0, 0, 1.3);

  return (
    <div className="h-screen w-screen">
      <Canvas camera={camera} dpr={Math.min(window.devicePixelRatio, 2)}>
        <Suspense fallback={null}>
          <Background />
          <Lens />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
