



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
                <h3>Adminstrator Sign In </h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.submitLogin}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" name="name" onChange={this.handleInputChange} value={this.state.name} />
                    <label><font color="red">{this.state.emaillabel}</font></label>
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleInputChange} value={this.state.password} />
                    <label><font color="red">{this.state.passwordlabel}</font></label>
                  </div>
                  <button type="submit" class="login">Sign In</button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      );
    
  }

}