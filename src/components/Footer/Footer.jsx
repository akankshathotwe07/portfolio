import React from "react";
import "./Footer.css";
import ak from "../../assets/ak.png";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={ak} alt="" />
            <p>
              Akanksha Thotwe — Full Stack Developer passionate about building
              modern, scalable and user-friendly web applications.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />

        <div className="footer-bottom">
          <p>© 2026 Akanksha Thotwe. All rights reserved.</p>

          <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
