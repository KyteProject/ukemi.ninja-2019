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
        We post all our thoughts and experiences on our journey to reclaim the city. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Aspernatur, illo fugit exercitationem dolor
        harum itaque sapiente nostrum?
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
