import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from 'react-router-dom';

import './App.css';
import Nav from './NavBar/Nav.js';
import Form from './Form/Form';

import "./css/bootstrap.min.css";
import "./css/bootstrap.min.css.map";
import "./js/bootstrap.bundle.min.js";
import "./js/bootstrap.bundle.min.js.map";
import "./js/jquery-3.6.1.min.js";
import "./js/popper.min.js";
import Customer from './Customer/Customer';
import Contact from './Contact/Contact';
import Transfer from './Transfer/Transfer';

class App extends Component {
  state = {  } 
  render() { 
    return (
      
        <div className='App'>
        <Router>
        <Nav />
        
        <Routes>
        <Route exact path="/" element={<Form />} />        
        <Route  path='/Customers' element={<Customer />} />
        <Route  path='/Transfers-history' element={<Transfer/>} />
        <Route  path='/Contact' element={<Contact />} />
        </Routes>
        </Router>  
      </div>
      

    );
  }
}
 
export default App;

