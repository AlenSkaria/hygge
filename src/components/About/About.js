import React from "react";
import "./About.css";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

function About() {
  return (
    <div className="about__main">
      <h3>Why People Choose Us</h3>
      <div className="about__content">
        <div className="about__list">
          <ViewInArOutlinedIcon />
          <h4>Easy Returns</h4>
          <p>
            Our return policy is simple and that is why customers love our shop.
          </p>
        </div>
        <div className="about__list">
          <PersonOutlineOutlinedIcon />
          <h4>Customer Service</h4>
          <p>We offer amazing customer service no matter what happens.</p>
        </div>
        <div className="about__list">
          <StarBorderOutlinedIcon className="classalen" />
          <h4>High Quality</h4>
          <p>
            All of our products go through very strict inspection before we
            dispatch them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
