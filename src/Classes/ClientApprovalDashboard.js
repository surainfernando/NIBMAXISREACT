import React from 'react';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import "./AdminDashboard.css"




export default class Login extends React.Component {

    constructor() {
      super();
      this.state = { name: '', password: '', emaillabel: '', passwordlabel: '',emaillabel1: ''};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submitLogin = this.submitLogin.bind(this);
      this.activateLasers = this.activateLasers.bind(this);
      //this.displayPrompt=this.displayPrompt.bind(this);
   

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
 getDateToday(){
  const disablePastDt = current => {
    var d=new Date();
    return d;
  };
   
 }
displayPrompt()
{var userName = prompt('Please state you reason for booking an appointment')
 // window.location='/d'

}
   

 


  

  render() {
    return (
        <div className="container">
          <hr />
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-primary">
              <div className="panel-heading">
               <h1>Appointment Status</h1>
               
               <table class="table">
               <thead>
                 <tr>
              
                   <th scope="col">Date</th>
                   <th scope="col">Time</th>
                   <th scope="col">Reason For Meeting</th>
                   <th scope="col">Appointment Status</th>
         
                   
                 </tr>
               </thead>
               <tbody>
               <tr>
                   
               <td>4/10/2020</td>
               <td>12.45 pm</td>
               <td>Road Damage Complaint</td>
               <td class="booked2">Meeting Approved</td>
            
  
              
             </tr>
               <tr>
                   
               <td>5/10/2020</td>
               <td>9.30 am</td>
               <td>Road Damage group Discussion</td>
               <td class="booked1">Appointment Approval Pending</td>
            

              
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