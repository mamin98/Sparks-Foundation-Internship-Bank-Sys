import React from 'react';

import "./Form.css"

import "../css/bootstrap.min.css";
import "../css/bootstrap.min.css.map";
import "../js/bootstrap.bundle.min.js";
import "../js/bootstrap.bundle.min.js.map";
import "../js/jquery-3.6.1.min.js";
import "../js/popper.min.js";

const Form = () => {
  return ( 
    <React.Fragment>
    <div className="container m-2">
    <div className="row">
        <div className="col-lg-8">
            <div className="jumbotron bg-light m-2 style1">
                <h4 className="display-4 text-warning">Sparks Bank</h4>
                <h1 className="display-6">Your chance to grow your business.</h1>
                <hr className="my-4"/>
                <p>Now with (Tamkeen) loan program from Sparks Bank, you will be able to finance your business with easy and simple procedures.</p>
                <div className="lead">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 style2" type="search" placeholder="Search"
                        required aria-label="Search"/>
                        <button className="btn btn-outline-warning style3"  type="submit">Search</button>
                    </form>
                </div>
              </div>
        </div>
        <div className="col-lg-4 mt-4">
        <div className="list-group">
            <a href="#index" data-bs-toggle="collapse" 
            className="list-group-item list-group-item-action text-dark bg-warning">
              Available Changes Currency
            </a>
            <div className="collapse show" id="index">
                <a href="#" className="list-group-item list-group-item-action">USD $</a>
                <a href="#" className="list-group-item list-group-item-action">EUR €</a>
                <a href="#" className="list-group-item list-group-item-action">GBP £</a>
                <a href="#" className="list-group-item list-group-item-action">JPY ¥</a>
                <a href="#" className="list-group-item list-group-item-action">CAD C$</a>
            </div>
          </div>
        </div>
    </div>
    </div>

{/* Footer */}
<footer className="page-footer text-light bg-secondary margin-top pt-3">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 ">
      <div className="p-3 fopter-syle"> 
      © 2022 Copyright: <span className="text-decoration-none text-warning fontsize"> 
        The Sparks Foundation </span>
      </div>
    </div>
    </div>
  </div>
</footer> 
  </React.Fragment>
   );
 }
  
 export default Form;