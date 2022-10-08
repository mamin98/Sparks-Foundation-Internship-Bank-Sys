import React from 'react';
import image from "../images/contact-banner.png";

const Contact = () => {
    return ( 
        <React.Fragment>
            <div className="container" id="contact">
      <div className="text-center m-4">
        <h3>إتصل بنا</h3>
        <p>يمكنك التواصل معنا في أي وقت </p>
      </div>
      <div className="card m-3">
        <div className="row no-gutters">
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">Contact Us </h5>
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" required placeholder="Enter Email" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Question / Comment</label>
                  <textarea className="form-control"placeholder="Enter text ..."></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="check"/>
                  <label className="form-check-label" for="check">Check me out</label>
                </div>
                <button type="submit" className="btn btn-warning">Send</button>
              </form>
            </div>
          </div>
          <div className="col">
            <img className="card-img-top h-100" src={image} alt="Card image cap"/>
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
     );
}
 
export default Contact;