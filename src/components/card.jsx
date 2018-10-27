import React from "react";
import { Link } from "react-router-dom";


const Card = ({title,desc, modalid, fulldesc, modalidnohash, technoImg}) => {
   
  return (
    <React.Fragment>
    <div className="card  h-100">
    <div className="card-body">
      <img className="card-img-top mb-3" src={technoImg} alt="Card image cap" />
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
       {desc} 
      </p>
      <Link to="" className="btn btn-primary" data-toggle="modal" data-target={modalid}>
        Read More
      </Link>
    </div>
    <div className="modal fade" id={modalidnohash}  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span className="text-white" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body" dangerouslySetInnerHTML={{__html:fulldesc}}>
       
        </div>
       
      </div>
    </div>
  </div>

  </div>
    
  </React.Fragment>


  );
};

export default Card;
