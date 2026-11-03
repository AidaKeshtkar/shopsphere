import React from "react";
import Image from "../image/Image";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <Image src="/profile.webp" alt="Profile" className="profile-img" />
      <h2>About ShopSphere</h2>
      <p>
        We provide the best products with top-notch quality and customer
        service.
      </p>
    </div>
  );
};

export default About;
