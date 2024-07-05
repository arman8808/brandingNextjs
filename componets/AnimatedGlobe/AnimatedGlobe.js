import React from "react";

import "./AnimatedGlobe.css";

import GlobeTopImg from "../../public/Assets/Globe/GlobeTopImg.webp";
import GlobeBGImg from "../../public/Assets/Globe/GlobeBGImg.webp";
import Image from "next/image";

function AnimatedGlobe({ frontImage }) {
  return (
    <div className="services-globe-container">
      <Image src={GlobeBGImg} className="services-globe-container-background" />
      <Image src={GlobeTopImg} className="services-globe-container-top" />
      <Image src={frontImage} className="services-globe-container-top-main" />
    </div>
  );
}

export default AnimatedGlobe;
