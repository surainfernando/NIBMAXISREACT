import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ClientDashBoard from './Classes/ClientDashboard.js'
import Home from './Classes/Home.js'
import ClientRegister from './Classes/ClientRegister.js'
import Hello from './Classes/Hello.js'
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './Classes/button.css'



class App extends Component{


  constructor() {
    super();
    //window.location='/Home'
  
  }
  


  render() {
    return (
      <div>
     
      <Router>
      <nav className="navbar">
      <Link className="navbar-brand" >MEET  YOUR  REPRESENTATIVE</Link>
      </nav>
          <div>
            <Route exact path='/ClientDashBoard' component={ClientDashBoard} />
            <Route exact path='/d' component={Home} />
            <Route exact path='/' component={ClientRegister} />
         
            
          </div>
        </Router>
        </div>
  
      
    );
  }
}


export default App;
