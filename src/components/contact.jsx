import React from "react";



const Contact = () => {


  return (
    <React.Fragment>
      <div className="container page-content">
          <div className="text-center mb-5">
        <h2>
          <b>L</b>
          et's get in touch!!
        </h2>
        </div>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group row">
            <label className="col-8 mx-auto">Your Name: <input type="text" className="form-control" name="name"/></label>
            </div>
         <div className="form-group row">
            <label className="col-8 mx-auto">Your Email: <input type="email" name="email" className="form-control"/></label>
        </div>
         <div className="form-group row">
            <label className="col-8 mx-auto">Message: <textarea name="message" className="form-control"></textarea></label>
        </div>
        <div className="form-group row">
            <button type="submit" className="btn btn-primary mx-auto">Send</button>
        </div>
        </form>
      </div>
    </React.Fragment>


  );
};

export default Contact;
