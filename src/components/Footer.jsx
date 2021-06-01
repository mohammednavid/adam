import React from "react";
// material icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import ChatIcon from "@material-ui/icons/Chat";
// styles
import "../assets/styles/Footer.css";
import whiteLogo from "../assets/images/whiteLogo.png";

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <div className="footer__left">
        <img className="footer__logo" src={whiteLogo} />
        <p className="footer__desp">
          Loved by thousands of users. Get more socia media followers,
          engagements and much more with the smartest service availible.
        </p>
        <a className="footer__button">Get Started!</a>
      </div>
      <div className="footer__right">
        <ul className="footer__rightUl">
          <li className="footer__rightLi">Product</li>
          <li className="footer__rightLi">Home</li>
          <li className="footer__rightLi">How it works</li>
          <li className="footer__rightLi">Pricing</li>
          <li className="footer__rightLi">FAQs</li>
        </ul>
        <ul className="footer__rightUl">
          <li className="footer__rightLi">Account</li>
          <li className="footer__rightLi">Login</li>
          <li className="footer__rightLi">Privacy Policy</li>
          <li className="footer__rightLi">Terms of Services</li>
        </ul>
        <ul className="footer__rightUl">
          <li className="footer__rightLi">Connect</li>
          <li className="footer__rightLi">
            <ChatIcon className="footer__icon" />
            Live Chat
          </li>
          <li className="footer__rightLi">
            <EmailIcon className="footer__icon" />
            info@adam.com
          </li>
          <li className="footer__rightLi">
            <FacebookIcon className="footer__icon" />
            Facebook
          </li>
          <li className="footer__rightLi">
            <InstagramIcon className="footer__icon" />
            Instagram
          </li>
          <li className="footer__rightLi">
            <TwitterIcon className="footer__icon" />
            Twitter
          </li>
        </ul>
      </div>
    </div>
    <h2 className="footer__more">More Info</h2>
    <p className="footer__moreDesp">
      For more information and query cotact us at info@adam.com
    </p>
  </div>
);

export default Footer;
