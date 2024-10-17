import { useRef, useEffect } from "react";
import { RGBELoader } from "three-stdlib";
import {
  useGLTF,
  Caustics,
  CubeCamera,
  MeshRefractionMaterial,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

import gsap from "gsap";

const Diamond = (props) => {
  const ref = useRef();
  const { nodes } = useGLTF("/models/dflat.glb");

  // Use a custom environment map for the diamond material
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  useEffect(() => {
    const diamondRotation = gsap.to(ref.current.rotation, {
      x: "+=6.28",

      duration: 30,
      ease: "linear",
      repeat: -1,
    });

    // Clean up the animation when the component unmounts
    return () => diamondRotation.kill();
  }, []);

  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          backfaces
          color="white"
          position={[0, -0.5, 0]}
          lightSource={[5, 5, -10]}
          worldRadius={0.1}
          ior={1.8}
          backfaceIor={1.1}
          intensity={0.1}
        >
          <mesh
            castShadow
            ref={ref}
            geometry={nodes.Diamond_1_0.geometry}
            {...props}
          >
            <MeshRefractionMaterial
              envMap={texture}
              toneMapped={false}
            />
          </mesh>
        </Caustics>
      )}
    </CubeCamera>
  );
};

export default Diamond;
