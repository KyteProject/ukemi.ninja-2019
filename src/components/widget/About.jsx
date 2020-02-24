import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

import config from "../../../data/siteConfig";

const { userLinks } = config;

const About = () => {
  return (
    <div className="sidebox widget">
      <h3 className="widget-title">About Us</h3>
      <p>
        In the pursuit of multifunctional movement-centric design, Ukemi has extended beyond its
        initial inquiry of the city.
      </p>
      <p>
        We are opting to create products, equipment, theatre and events that tip their hat to this
        mantra - aiming to bridge the gap between fitness and play under the umbrella of movement.
      </p>
      <ul className="social social-color social-s">
        <li>
          <a href={userLinks.find((el) => el.label === "Facebook").url}>
            <AiOutlineFacebook size={28} className="s-facebook" />
          </a>
        </li>
        <li>
          <a href={userLinks.find((el) => el.label === "GitHub").url}>
            <AiOutlineGithub size={28} className="s-github" />
          </a>
        </li>
        <li>
          <a href={userLinks.find((el) => el.label === "Instagram").url}>
            <AiOutlineInstagram size={28} className="s-instagram" />
          </a>
        </li>
        <li>
          <a href={userLinks.find((el) => el.label === "LinkedIn").url}>
            <AiOutlineLinkedin size={28} className="s-linkedin" />
          </a>
        </li>
        <li>
          <a href={userLinks.find((el) => el.label === "Twitter").url}>
            <AiOutlineTwitter size={28} className="s-twitter" />
          </a>
        </li>
        <li>
          <a href={userLinks.find((el) => el.label === "Youtube").url}>
            <AiOutlineYoutube size={28} className="s-youtube" />
          </a>
        </li>
      </ul>
      <div className="clearfix" />
    </div>
  );
};

export default About;
