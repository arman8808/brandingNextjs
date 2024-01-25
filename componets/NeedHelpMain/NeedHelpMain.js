import React from "react";
import "./NeedHelpMain.css";

import HomeHelpBgImg from "../../Assets/Home/HomeHelpBgImg.jpeg";
import AboutUsNeedHelpImg1 from "../../Assets/AboutUs/AboutUsNeedHelpImg1.webp";

import ContactForm from "../ContactForm/ContactForm";

import companyData from "../../CompanyData";

function NeedHelpMain() {
  const needHelpStyle = {
    backgroundImage: `url("${HomeHelpBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleCallButtonClick = () => {
    window.location.href = `tel:${companyData.companyPhone}`;
  };
  return (
    <div className="need-help-section" style={needHelpStyle}>
      <div className="need-help-left">
        <h2>Let’s Collaborate to Discuss Your Project!</h2>
        <span>
          Submit the information below to access all the details you need. We're
          here to help.
        </span>
        <div className="need-help-left-form">
          <ContactForm />
        </div>
      </div>
      <div className="need-help-right">
        <img src={AboutUsNeedHelpImg1} alt="About" />
        <span>
          Call Us Now to Know How Our Strategies Can Help Your Brand Grow at
          Record Speed!
        </span>
        <button onClick={handleCallButtonClick}>Call Us Now</button>
      </div>
    </div>
  );
}

export default NeedHelpMain;
