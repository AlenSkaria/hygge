import React from "react";
import "./Footer.css";
import logo from "../../logo.svg";
import content from "../../jsons/category.json";

function Footer() {
  return (
    <div className="footer__main">
      <div className="copyright__section">
        <div className="copyright__section_logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Hygge</h4>
        </div>
        <p>© 2020 - All rights reserved</p>
        <div className="social__links">
          <img src="/logos/instagram.svg" alt="" />
          <img src="/logos/twitter.svg" alt="" />
          <img src="/logos/facebook.svg" alt="" />
        </div>
      </div>
      <div className="mob__categories">
        <h3>Categories</h3>
        {content &&
          content.map((c) => {
            return (
              <div key={c.id}>
                <p>{c.title}</p>
              </div>
            );
          })}
      </div>

      <div className="legal">
        <h3>Legal</h3>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
      <div className="company_alen">
        <h3>Company</h3>
        <p>About</p>
        <p>Team</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Footer;
