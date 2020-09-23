



//import React from 'react';
import React, {PropTypes} from 'react'
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import ClientDashBoard from './ClientDashboard.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { useHistory } from 'react-router-dom';




export default class Login extends React.Component {

    constructor() {
      super();
      this.state = { name: '', password: '', emaillabel: '', passwordlabel: '',emaillabel1: ''};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submitLogin = this.submitLogin.bind(this);
      this.activateLasers = this.activateLasers.bind(this);
   

  }

 

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  activateLasers(event){

    axios.get(`http://localhost:5000/displaytemp`)
    .then( 
        this.setState({
        emaillabel1: "The emaile ."
      })

);
    
  }
  submitLogin(event) {

   
    event.preventDefault();
    window.location='/ClientDashBoard'
    
    

    //const history = useHistory()
   // window.location='/ClientDashBoard'
//     // axios.get(`http://localhost:5000/displaytemp`)
//     // .then(history.pushState(null, ClientDashBoard)
// );
  }

  handleClick() {
    const history = useHistory();
    history.push("/ClientDashBoard");
  }



  

  render() {
    return (
        <div className="container">
          <hr />
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-primary">
              <div className="panel-heading">
              
              </div>
              <div className="panel-body">
                <h1>Adminstrator profile</h1>
                <table class="table">
              
                <tbody>
                <tr>
                    
                <td>Name</td>
                <td>George Rolf</td>
            
              </tr>
                <tr>
                    
                <td>Address</td>
                <td>9th Street, Kandy</td>
           
              </tr>
              <tr>
                    
                <td>Telephone Number</td>
                <td>0777654321</td>
           
              </tr>
              <tr>
                    
                <td>Email</td>
                <td>georgerolf@gmail.com</td>
           
              </tr>
           
                  
                 
                </tbody>
              </table>
              </div>
            </div>
          </div>
          
        </div>
      );
    
  }

}