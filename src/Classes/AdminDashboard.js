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
               <h1>Adminstrator Dashboard</h1>
               <p>Note: When the appointment is approved the constituent will see that the appointment is approved.</p>
               <p>An appointment which has been apprved can be cancelled. When a previously approved meeting is cancelled the constituent will recieve an notification</p>
               <table class="table">
               <thead>
                 <tr>
              
                   <th scope="col">Date</th>
                   <th scope="col">Time</th>
                   <th scope="col">Constituent's Name</th>
                   <th scope="col">Reason For Meeting</th>
                   <th scope="col">Approve Appointment</th>
                   <th scope="col">Delete Appointment</th>
                   
                 </tr>
               </thead>
               <tbody>
               <tr>
                   
               <td>4/10/2020</td>
               <td>10.30 am</td>
               <td> Peter Parker </td>
               <td>Drainage Block</td>
               <td class="booked1">Approved</td>
               <td><button class="logout"> Cancel</button></td>

              
             </tr>
                 <tr>
                   
                   <td>4/10/2020</td>
                   <td>12.45 pm</td>
                   <td> John Perera </td>
                   <td>Road Damage Complain</td>
                   <td class="booked1">Approved</td>
                   <td><button class="logout"> Cancel</button></td>
  

                  
                 </tr>
                 <tr>
                   
                   <td>4/10/2020</td>
                   <td>12.45 pm</td>
                   <td> Wimal Johnson </td>
                   <td>Building plan discussion</td>
                   <td><button class="login"> Approve</button></td>
                   <td><button class="logout"> Delete</button></td>

                  
                 </tr>
                 <tr>
                   
                 <td>5/10/2020</td>
                 <td>9.30 am</td>
                 <td> John Perera </td>
                 <td>Road damage group discussion</td>
                 <td><button class="login"> Approve</button></td>
                 <td><button class="logout"> Delete</button></td>

                
               </tr>
              
                 <tr>
                   
                   <td>5/10/2020</td>
                   <td>9.30 am</td>
                   <td> kasun gamage </td>
                   <td>Dengue complaint</td>
                   <td><button class="login"> Approve</button></td>
                   <td><button class="logout"> Delete</button></td>

                  
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