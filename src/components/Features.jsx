import React from "react";
import "../assets/styles/Features.css";
import automation from "../assets/images/automation.svg";
import rocket from "../assets/images/rocket.svg";
import internet from "../assets/images/internet.svg";
import digitalAd from "../assets/images/digitalAd.svg";

const Features = () => {
  return (
    <div className="features">
      <h2 className="features__section">The Easiest of All</h2>
      <h1 className="features__header">Classy, Quick & Simple!</h1>
      <div className="features__container">
        <div className="features__content">
          <img src={automation} alt="" className="features__img" />
          <p className="features__title">Smart Automation</p>
          <p className="features__desp">
            ADAM is powered with very refined algorithms and system follow that
            you will be able to get your business marketing in very smarter way.
          </p>
        </div>
        <div className="features__content">
          <img src={rocket} alt="" className="features__img" />
          <p className="features__title">Fast & Optimized</p>
          <p className="features__desp">
            ADAM works quickly throughout the day and night, picking up more
            engagement for your business growth.
          </p>
        </div>
        <div className="features__content">
          <img src={internet} alt="" className="features__img" />
          <p className="features__title">Easy Setup</p>
          <p className="features__desp">
            It's incredibly easy to setup ADAM. Spend a minute setting up and we
            promise you months of results. It's so simple!
          </p>
        </div>
        <div className="features__content">
          <img src={digitalAd} alt="" className="features__img" />
          <p className="features__title">All In One!</p>
          <p className="features__desp">
            ADAM provides you advertisements for all major social platforms
            along with account scheduling to grow your business 2x faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
