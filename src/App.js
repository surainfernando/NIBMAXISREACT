import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ClientDashBoard from './Classes/ClientDashboard.js'
import Home from './Classes/Home.js'
import ClientRegister from './Classes/ClientRegister.js'
import AdminLogin from './Classes/AdminLogin.js'
import AdminDashboard from './Classes/AdminDashboard.js'
import ClientApprovalDashboard from './Classes/ClientApprovalDashboard.js'
import Clientprofile from './Classes/Clientprofile.js'
import Adminstratorprofile from './Classes/AdminstratorProfile.js'
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
            <Route exact path='/Admin/Login' component={AdminLogin} />
            <Route exact path='/Admin/DashBoard' component={AdminDashboard} />
            <Route exact path='/ClientApproval' component={ClientApprovalDashboard} />
            <Route exact path='/ClientProfile' component={Clientprofile} />
            <Route exact path='/Admin/Profile' component={Adminstratorprofile} />


         
            
          </div>
        </Router>
        </div>
  
      
    );
  }
}


export default App;
