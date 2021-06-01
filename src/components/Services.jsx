import React from "react";
import "../assets/styles/Services.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import girl from "../assets/images/girl.png";
import socialGirl from "../assets/images/socialGirl.png";

const Services = () => {
  return (
    <div className="services">
      <h1 className="services__header">
        Grow Your
        <br />
        <span className="services__bu">Bu</span>
        <span className="services__si">si</span>
        <span className="services__ne">ne</span>
        <span className="services__s1">s</span>
        <span className="services__s2">s </span>
        like Never
        <br />
        Before!
      </h1>
      <p className="services__desp">
        ADAM is centralized digital marketing system with multiple bots that
        helps you get more followers, likes and engagement for various social
        media platforms.
        <br />
        Get started in seconds!
      </p>
      <div className="services__form">
        <input type="text" placeholder="Your email address" />
        <a className="services__button">Sign Up Now</a>
      </div>
      <div className="services__bottom">
        <p className="services__service">
          <CheckCircleIcon />
          Modification
        </p>
        <p className="services__service">
          <CheckCircleIcon />
          Real-time Stats
        </p>
        <p className="services__service">
          <CheckCircleIcon />
          Reports on Daily basis
        </p>
      </div>
      <div className="services__service">
        <div className="service__container">
          <p className="service__section">All Social Platform</p>
          <h1 className="service__header">Centralized Platform</h1>
          <p className="service__desp">
            No need to perform the headache task of marketing by visiting
            various social platforms. You just need ADAM's centralized to
            multiple platforms under the same roof.
          </p>
          <div className="service__form">
            <input type="text" placeholder="Your email address" />
            <a className="service__button">Sign Up Now</a>
          </div>
          <div className="service__bottom">
            <p className="service__service">
              <CheckCircleIcon />
              Modification
            </p>
            <p className="service__service">
              <CheckCircleIcon />
              Real-time Stats
            </p>
            <p className="service__service">
              <CheckCircleIcon />
              Reports on Daily basis
            </p>
          </div>
        </div>
        <img src={socialGirl} className="service__img1" alt="" />
      </div>
      <div className="services__service">
        <img src={girl} className="service__img2" alt="" />
        <div className="service__container">
          <p className="service__section">Socail Media Scheduler</p>
          <h1 className="service__header">Smart Automation</h1>
          <p className="service__desp">
            ADAM will let you engage your audience in your absence with
            auto-replied, auto-comments and automated direct messages. Customize
            your automated replies or comments as you like for you audience.
          </p>
          <div className="service__form">
            <input type="text" placeholder="Your email address" />
            <a className="service__button">Sign Up Now</a>
          </div>
          <div className="service__bottom">
            <p className="service__service">
              <CheckCircleIcon />
              Modification
            </p>
            <p className="service__service">
              <CheckCircleIcon />
              Real-time Stats
            </p>
            <p className="service__service">
              <CheckCircleIcon />
              Reports on Daily basis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
