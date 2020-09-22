import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ClientDashBoard from './Classes/ClientDashboard.js'
import Home from './Classes/Home.js'
import Hello from './Classes/Hello.js'
import { useHistory } from 'react-router-dom';



class App extends Component{


  constructor() {
    super();
    //window.location='/Home'
  
  }
  


  render() {
    return (
      <div>
      <Router>
          <div>
            <Route exact path='/ClientDashBoard' component={ClientDashBoard} />
            <Route exact path='/' component={Home} />
            
          </div>
        </Router>
        </div>
  
      
    );
  }
}


export default App;
