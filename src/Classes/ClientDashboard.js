import React from 'react';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



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
{
  window.location='/d'

}
   

 


  

  render() {
    return (
        <div className="container">
          <hr />
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-primary">
              <div className="panel-heading">
               <h2> Book Appointment</h2>
               <div>
               <Calendar
                 onChange={this.onChange}
                 value={this.state.date}
                 minDate={new Date()}
               />
             </div>
             <br></br> 
             <h3> Pick Appointment Time Slot</h3>
             <br></br>
             <table class="table">
             <thead>
               <tr>
            
                 <th scope="col">Morning</th>
                 <th scope="col">Afternoon</th>
                 
               </tr>
             </thead>
             <tbody>
               <tr>
                 
                 <td>9.30 am</td>
                 <td>12.45 pm</td>
                
               </tr>
               <tr>
                 
                 <td class="booked">9.45 am</td>
                 <td>1.00 pm</td>
                
               </tr>
               <tr>
                
                 <td>10.00 am</td>
                 <td class="booked">1.15 pm</td>
               
               </tr>
               <tr>
                
                 <td>10.15 am</td>
                 <td>1.30 pm</td>
               
               </tr>
               <tr>
                
                 <td>10.30 am</td>
                 <td>1.45 pm</td>
               
               </tr>
             </tbody>
           </table>
              </div>
              
            </div>
          </div>
          <button onClick={this.displayPrompt}>
  Activate Lasers
</button>
        </div>
      );
    
  }

}