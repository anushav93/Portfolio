import React, {Component} from "react";
import ReactTypingEffect from "react-typing-effect";

class IndexPage extends Component {
  


  render(){
    return(

    <div className="container page-content index-page text-center">
    <div className="row h-100">
    <div className="col-12 my-auto">
    <h1 className="">
        <ReactTypingEffect
          text={["Hello!!", "I develop beautiful solutions!!"]}
        />
        <br />
        I'm Anusha Ventrapragada, a Frontend Web Developer.
      </h1>
    </div>
    </div>
    
    </div>
    )

  }

 
  
 
};

export default IndexPage;
