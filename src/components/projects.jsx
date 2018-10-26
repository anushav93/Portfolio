import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container page-content h-100">
      <div className="row">
        <div className="col-sm-6 col-lg-4 mb-2 ">
          <div class="card  h-100">
            <div class="card-body">
              <img class="card-img-top" src="" alt="Card image cap" />
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="" class="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-2">
          <div class="card h-100">
            <div class="card-body">
              <img class="card-img-top" src="" alt="Card image cap" />
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="" class="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-2">
          <div class="card h-100">
            <div class="card-body">
              <img class="card-img-top" src="" alt="Card image cap" />
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="" class="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
