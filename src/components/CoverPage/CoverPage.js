import React from "react";
import "./CoverPage.css";
import cover from "../../assets/cover.svg";

function CoverPage() {
  return (
    <div className="cover__main">
      <div className="cover__content">
        <h2>We Offer The Best Products For Your Skin </h2>
        <button className="cover__button">Shop Now</button>
      </div>
      <img src={cover} alt="" />
    </div>
  );
}

export default CoverPage;
