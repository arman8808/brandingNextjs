import React from "react";

import "./ServicesLatestWork.css";

import { showcaseData } from "../portfolioShowcaseData";

import { Link } from "react-router-dom";

import PortfolioSeeMoreButtonImg from "../../Assets/Portfolio/PortfolioSeeMoreButtonImg.webp";

function ServicesLatestWork({ serviceName }) {
  const serviceData = showcaseData.find(
    (service) => service.heading === serviceName
  );

  const imagesToShow = serviceData ? serviceData.collage.slice(0, 3) : [];

  return (
    <div className="services-latest-work-container">
      <h2>Latest Work</h2>
      <div className="services-latest-work-gallery">
        <div className="services-latest-work-gallery-images">
          {imagesToShow.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Service ${serviceName} ${index + 1}`}
            />
          ))}
        </div>

        <Link
          to={`/portfolio/#${serviceName.toLowerCase().replace(/\s/g, "-")}`}
        >
          <img
            src={PortfolioSeeMoreButtonImg}
            alt={`See more of ${serviceName}`}
          />
        </Link>
      </div>
    </div>
  );
}

export default ServicesLatestWork;
