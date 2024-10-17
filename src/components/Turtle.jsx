import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Turtle = (props) => {
  const { scene, animations } = useGLTF(
    "/models/model_52a_-_kemps_ridley_sea_turtle_no_id-transformed.glb"
  );
  const { actions, mixer } = useAnimations(animations, scene);

  useEffect(() => {
    if (mixer && actions["Swim Cycle"]) {
      mixer.timeScale = 0.5;
      actions["Swim Cycle"].play();
    }
  }, [mixer, actions]);

  useFrame((state) => {
    scene.rotation.z = Math.sin(state.clock.elapsedTime / 4) / 2;
  });

  return <primitive object={scene} {...props} />;
};

export default Turtle;
