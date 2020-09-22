import React from 'react';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"



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
    axios.get(`http://localhost:5000/displaytemp`)
    .then( window.location=''
);
  }

 


  

  render() {
    return (
        <div className="container">
          <hr />
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3>Cient Dashboard</h3>
                <h3>Cient Dashboard</h3>
                <h3>Cient Dashboard</h3>
                <h3>Cient Dashboard</h3>
                <h3>Cient Dashboard</h3>

                <h3>Cient Dashboard</h3>
                <h3>Cient Dashboard</h3>
                <h3>Cient Dashboard</h3>
              </div>
              
            </div>
          </div>
        </div>
      );
    
  }

}