import * as THREE from "three";
import { fragment1 } from "../../shader/fragment1.ts";
import { vertex1 } from "../../shader/vertex1.ts";
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Lens = () => {
  // const cubeRender = new THREE.WebGLCubeRenderTarget(256, {
  //   format: THREE.RGBAFormat,
  //   generateMipmaps: true,
  //   minFilter: THREE.LinearMipMapLinearFilter,
  // });

  // const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeRender);

  const lens = {
    // extensions: {
    //   derivatives: "#extension GL_OES_standard_derivatives : enable",
    // },
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 0 },
      tCube: { value: 0 },
      mRefractionRatio: { value: 1.02 },
      mFresnelBias: { value: 0.1 },
      mFresnelScale: { value: 4 },
      mFresnelPower: { value: 2 },
      resolution: { value: new THREE.Vector4() },
    },
    // wireframe: true,
    // transparent: true,
    vertexShader: vertex1,
    fragmentShader: fragment1,
  };

  useFrame(() => {
    // lens.uniforms.tCube.value = cubeRender.texture;
  });

  return (
    <Sphere args={[0.4, 32, 32]}>
      <shaderMaterial args={[lens]} />
    </Sphere>
  );
};
