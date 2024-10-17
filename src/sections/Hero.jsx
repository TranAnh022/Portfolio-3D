import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
//import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import { Level, Sudo, Camera, Cactus, Box } from "../components/Scene";
import Target from "../components/target";
import HeroCamera from "../components/HeroCamera";
import ReactLogo from "../components/ReactLogo";
import Diamond from "../components/Diamond";
import Aquarium from "../components/Aquarium";
import Turtle from "../components/Turtle";
import { Float, Environment, Lightformer } from "@react-three/drei";
import Button from "../components/Button";

const Hero = () => {
  //   const controls = useControls("HackerRoom", {
  //     rotationX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0.1,
  //       max: 10,
  //     },
  //   });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Tran Anh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera>
              <group
                scale={isMobile ? 4 : isTablet ? 5 : 7}
                position={
                  isMobile ? [0, -4, 0] : isTablet ? [0, -5, 0] : [0, -10, -5]
                }
                rotation={[0, 5.6, 0]}
              >
                <Level />
                <Sudo />
                <Camera />
                <Cactus />
                <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
              </group>
            </HeroCamera>
            <group>
              <Target
                position={
                  isMobile
                    ? [-7, -5, 2]
                    : isTablet
                    ? [-13, -6, 3]
                    : [-20, -10, 5]
                }
                scale={isMobile ? 1 : isTablet ? 1 : 2}
              />
              <ReactLogo
                position={
                  isMobile ? [7, 13, 1] : isTablet ? [13, 5, 2] : [18, 10, 5]
                }
                scale={isMobile ? 0.4 : isTablet ? 0.4 : 1}
              />

              <Diamond
                rotation={[0, 2.5, 0.9]}
                position={
                  isMobile ? [-6, 8, 3] : isTablet ? [-13, 5, 2] : [-18, 5, 8]
                }
                scale={isMobile ? 1.5 : isTablet ? 2 : 2}
              />
            </group>
            <group
              position={
                isMobile ? [7, -5, 0] : isTablet ? [13, -6, 3] : [17, -6, 1]
              }
              rotation={[0, -15, 0]}
              scale={isMobile ? 0.2 : isTablet ? 0.5 : 0.6}
            >
              <Aquarium position={[0, 0.25, 0]}>
                <Float rotationIntensity={2} floatIntensity={10} speed={2}>
                  <Turtle
                    position={[0, -0.5, -1]}
                    rotation={[0, Math.PI, 0]}
                    scale={23}
                  />
                </Float>
              </Aquarium>
            </group>
            <Environment resolution={1024}>
              <group rotation={[-Math.PI / 3, 0, 0]}>
                <Lightformer
                  intensity={4}
                  rotation-x={Math.PI / 2}
                  position={[0, 5, -9]}
                  scale={[10, 10, 1]}
                />
                {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
                  <Lightformer
                    key={i}
                    form="circle"
                    intensity={4}
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[x, 4, i * 4]}
                    scale={[4, 1, 1]}
                  />
                ))}
                <Lightformer
                  intensity={2}
                  rotation-y={Math.PI / 2}
                  position={[-5, 1, -1]}
                  scale={[50, 2, 1]}
                />
                <Lightformer
                  intensity={2}
                  rotation-y={-Math.PI / 2}
                  position={[10, 1, 0]}
                  scale={[50, 2, 1]}
                />
              </group>
            </Environment>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <directionalLight position={[-10, -10, -10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          ></Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
