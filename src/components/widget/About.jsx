import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const About = () => {
  return (
    <div className="sidebox widget">
      <h3 className="widget-title">About Us</h3>
      <p>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum. Nulla
        vitae elit libero, a pharetra augue. Donec id elit.
      </p>
      <ul className="social social-color social-s">
        <li>
          <a href="https://twitter.com/UkemiProject">
            <AiOutlineTwitter size={28} className="s-twitter" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/UkemiProject">
            <AiOutlineFacebook size={28} className="s-facebook" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/UkemiProject">
            <AiOutlineInstagram size={28} className="s-instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineLinkedin size={28} className="s-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://youtube.com/ukemiproject">
            <AiOutlineYoutube size={28} className="s-youtube" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ukemi-project">
            <AiOutlineGithub size={28} className="s-github" />
          </a>
        </li>
      </ul>
      <div className="clearfix" />
    </div>
  );
};

export default About;
