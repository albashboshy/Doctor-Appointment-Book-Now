import React from "react";
import footerLogo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
// react icons
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function Footer() {
let scroll = ()=>{
 window.scrollTo({
  top:0,
  behavior:"smooth"
 })
}
  return (
    <footer>
      <div className="arrow" onClick={()=>{scroll();}}>
            
            <MdKeyboardDoubleArrowUp className="arrow-shape" />
          </div>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-3 col-md-6 col-sm-12 fi-row">
            <img src={footerLogo} alt="logo" loading="lazy" />
            <p>
              the bigest hospital in the world for caring your health and take
              care of yourself
            </p>
            <div className="content">
              <FontAwesomeIcon icon={faPhone} />
              <div className="info">
                <p>Contact us</p>
                <p>+0965 66989078</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 widget">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#aboutus">about us</a>
              </li>
              <li>
                <a href="#service">services</a>
              </li>
              <li>
                <a href="#booking">booking</a>
              </li>
              <li>
                <a href="#faqs">faq's</a>
              </li>
              <li>
                <a href="#blog">blogs</a>
              </li>
              <li>
                <a href="#ourteam">our team </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 widget">
            <h2>Our Services</h2>
            <ul>
              <li>
                <a href="#">dental care</a>
              </li>
              <li>
                <a href="#">cardiac clinic</a>
              </li>
              <li>
                <a href="#">massege therapy</a>
              </li>
              <li>
                <a href="#">cardilogy</a>
              </li>
              <li>
                <a href="#">precise diagnose</a>
              </li>
              <li>
                <a href="#">ambulance services</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 widget">
            <h2>Subscribe</h2>
            <div className="email">
              <input type="email" placeholder="Enter your email" />
              <button className="subscribe">Subscribe</button>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faSnapchat} />
            </div>
          </div>
        </div>
        <div className="row copy">
          <div className="col-lg-6 col-md-6">
            <p>
              copyright &copy; {new Date().getFullYear()} all rights reserved
            </p>
          </div>
          <div className="col-lg-6 col-md-6 desinged">
            <p> &hearts; designed by mahmoud ahmed &hearts; </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
