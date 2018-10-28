import React from "react";
import aboutImg from "../about-img.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container page-content">
      <h2>
        <b>A</b>
        bout
      </h2>

      <div className="row">
        <div className="col-md-6">
          <h5 className="text-justify">
            I am a Frontend web developer with 3+ years of professional
            experience and knowledge specializing in the web and mobile
            application development. I’ve always enjoyed being challenged and
            working on projects that require me to work outside of my comfort
            zone and knowledge set, as I believe learning should be a continuous
            process. <br />
            <br />
            I'm a graduate with Master’s degree in Computer Science - emphasis
            being on software engineering, database management, web and mobile
            application development.
            <br />
            <br />
            When I am not infront of my computer, I’m a nice cook. I like
            meeting new people, learning new things, learn photography and
            travel whenever I can.
          </h5>
        </div>
        <div className="col-md-6 text-center">
          <img src={aboutImg} className="img img-fluid about-img " />
        </div>
        <div className="col-12 text-center">
        <Link to="/Resume.pdf" target="_blank" className="btn btn-primary mt-5" >
        View Resume
      </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
