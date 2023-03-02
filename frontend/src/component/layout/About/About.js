import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import image from "../../../images/suresh.jpg";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div className="aboutSectionContainer1">
            <Avatar
              style={{ width: "13vmax", height: "13vmax", margin: "1vmax 0" }}
              src={image}
              alt="Founder"
            />
            <Typography>SURESH SUTHAR</Typography>
            <span>Ecommerce Website</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/suresh5189"
              target="blank"
            >
              <GitHubIcon className="githubSvgIcon" />
            </a>

            <a
              href="https://www.instagram.com/suresh_242000/"
              target="blank"
            >
              <InstagramIcon className="instagramSvgIcon" />
            </a>

            <a
              href="https://www.linkedin.com/in/suresh780/"
              target="blank"
            >
              <LinkedInIcon className="LinkedInIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
