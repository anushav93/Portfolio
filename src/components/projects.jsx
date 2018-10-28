import React, {Component}  from "react";
import data from "../projectsdata.json"
import Card from './card';

class Projects extends Component {
  
  render() {
    return (
    <React.Fragment>
    <div className="container page-content">
    <div className="row">
      {
        data.projects.map(function(project){
          return (
            <div className="col-sm-6 col-lg-4 mb-2">
              <Card technoImg={project.technologyImgSrc} title={project.title} desc={project.shortDescription } fulldesc={ project.description}  modalidnohash={project.modalId} modalid={'#'+project.modalId}/>
            
            </div>
          )
        })

      }
      </div>
      </div>

      </React.Fragment>
    );
  }
};

export default Projects;
