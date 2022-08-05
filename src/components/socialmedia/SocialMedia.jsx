rel = "noreferrer";

import React from "react";
import "./socialmedia.css";
import github from "../../assets/github1.png";
import linkedin from "../../assets/linkedin2.png";
import gmail from "../../assets/gmail.png";
import twitter from "../../assets/twitter1.png";
import leetcode from "../../assets/leetcode.png";

const SocialMedia = () => {
  return (
    <div className="logo">
      <div className="social-logo logo1">
        <a
          href="https://github.com/sanyamjain04"
          rel="noreferrer"
          target="_blank"
        >
          <img width={25} className="social1" src={github} alt="" />
        </a>
      </div>
      <div className="social-logo logo2 ">
        <a
          href="https://www.linkedin.com/in/sanyamjain04/"
          rel="noreferrer"
          target="_blank"
        >
          <img width={30} className="social2" src={linkedin} alt="" />
        </a>
      </div>
      <div className="social-logo logo3">
        <a
          href="mailto:sanyamjainsj04@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <img width={30} className="social3" src={gmail} alt="" />
        </a>
      </div>
      <div className="social-logo logo4">
        <a
          href="https://twitter.com/ItsSanyam"
          rel="noreferrer"
          target="_blank"
        >
          <img width={30} className="social4" src={twitter} alt="" />
        </a>
      </div>
      <div className="social-logo logo4">
        <a
          href="https://leetcode.com/sanyamjain04/"
          rel="noreferrer"
          target="_blank"
        >
          <img width={30} className="social5" src={leetcode} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
