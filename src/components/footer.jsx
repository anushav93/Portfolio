import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container footer mt-4">
      <div className="row">
        <div className="col-8 text-left">Anusha | Vdesign | 2018</div>
        <div className="col-4 text-right">
        <a href="https://github.com/anushav93" target="_blank" className="fa fa-github-alt mx-3"/>
        <a href="" className="fa fa-linkedin" /></div>
      </div>
    </div>
  );
};

export default Footer;
