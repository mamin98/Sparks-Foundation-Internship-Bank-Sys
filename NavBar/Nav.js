import React from 'react';

import "../css/bootstrap.min.css";
import "../css/bootstrap.min.css.map";
import "../js/bootstrap.bundle.min.js";
import "../js/bootstrap.bundle.min.js.map";
import "../js/jquery-3.6.1.min.js";
import "../js/popper.min.js";
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = () => {
    return ( 
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
              <a className="navbar-brand text-warning" href="https://www.thesparksfoundationsingapore.org/">
                Sparks Bank</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 list">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Transfers-history">Transfers history</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Customers' >Show Customers</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Contact'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
     );
}
 
export default Nav;
