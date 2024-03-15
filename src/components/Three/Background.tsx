import * as THREE from "three";
import { Sphere } from "@react-three/drei";
import { fragment } from "../../shader/fragment.ts";
import { vertex } from "../../shader/vertex.ts";
import { useFrame } from "@react-three/fiber";

export const Background = () => {
  const shader = {
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new THREE.Vector4() },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
  };

  const v = new THREE.Vector3();
  useFrame((state) => {
    shader.uniforms.time.value += 0.01;
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 1.2),
      0.007,
    );
  });

  return (
    <Sphere args={[1.5, 32, 32]}>
      <shaderMaterial args={[shader]} />
    </Sphere>
  );
};
