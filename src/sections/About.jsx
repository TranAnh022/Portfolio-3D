import Globe from "react-globe.gl";
import { useRef, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../components/Button";
const About = () => {
  const globeRef = useRef();
  const [pinPosition, setPinPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

   const handleCopy = () => {
     navigator.clipboard.writeText("namanh022@gmail.com");
     setHasCopied(true);

     setTimeout(() => {
       setHasCopied(false);
     }, 2000);
  };

  const updatePinPosition = () => {
    if (globeRef.current) {
      const coords = { lat: 60.1699, lng: 24.9384 };
      const point = globeRef.current.getScreenCoords(coords.lat, coords.lng);
      if (point) {
        setPinPosition({ top: point.y, left: point.x });
      }
    }
  };
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      updatePinPosition();

      globeRef.current.controls().addEventListener("change", updatePinPosition);
    }

    return () => {
      if (globeRef.current) {
        globeRef.current
          .controls()
          .removeEventListener("change", updatePinPosition);
      }
    };
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Tran Anh (BEN)</p>
              <p className="grid-subtext">
                As a Software Engineer with a degree from VAMK, I'm passionate
                about building high-quality, well-architected software
                solutions. Over the past year, I’ve honed my skills through
                personal projects and staying current with industry trends. I
                focus on creating user-centric solutions that emphasize
                performance, code quality, and maintainability.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2-Photoroom.jpg"
              alt="grid-2"
              className="w-full sm:w-[276]px h-fit object-container rounded "
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript and TypeScript, with a strong focus
                on the React and Next.js ecosystems for frontend development.
                Additionally, I am well-versed in backend technologies,
                including Node.js, .NET, MongoDB, and PostgreSQL, allowing me to
                build full-stack applications with robust functionality.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="relative rounded-3xl w-full sm:h-[326]px h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showGraticules
                globeImageUrl={
                  "//unpkg.com/three-globe/example/img/earth-night.jpg"
                }
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
              <div
                style={{
                  position: "absolute",
                  top: `${pinPosition.top}px`, // Use calculated top
                  left: `${pinPosition.left}px`, // Use calculated left
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "auto",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FaMapMarkerAlt
                  alt="Pin"
                  style={{ width: "24px", height: "24px", color: "gray" }}
                />
                {isHovered && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "black",
                      color: "white",
                      padding: "5px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                    }}
                  >
                    I'm here
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I'm based in Espoo,Finland, with remote work available
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
              ></Button>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problem and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  namanh022@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
