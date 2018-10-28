import React from "react";



const Contact = () => {


  return (
    <React.Fragment>
      <div className="container page-content">
        <div className="row">
        <div className="col-12">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
        </div>
      
      </div>
    </React.Fragment>


  );
};

export default Contact;
