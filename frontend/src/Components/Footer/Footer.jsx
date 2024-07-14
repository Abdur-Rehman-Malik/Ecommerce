import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt="" height={100} />
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Office</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={facebook_icon} alt="" height={20} />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" height={20} />
          </div>
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" height={20} />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2024 - All Right Received </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
