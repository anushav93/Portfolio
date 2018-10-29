import React from "react";
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiGmail, mdiLinkedin,mdiGithubFace} from '@mdi/js';

const Footer = () => {
  return (
    <div className="container footer mt-4">
      <div className="row">
        <div className="col-7 text-left">Anusha | Vdesign | 2018</div>
        <div className="col-5 text-right">
            <a href="mailto:anushaventrapragada93@gmail.com" target="_top"> <Icon path={mdiGmail}
            size={.8}
            color="#DA4D44"/></a>
        <a href="https://github.com/anushav93" target="_blank" className="mx-3"><Icon path={mdiGithubFace}
        size={.8}
        color="#24292D"/> </a>
        <a href="https://www.linkedin.com/in/anusha-v" target="_blank"><Icon path={mdiLinkedin}
        size={.8}
        color="#1074AE"/> </a>


    </div>

      </div>
    </div>
  );
};

export default Footer;
