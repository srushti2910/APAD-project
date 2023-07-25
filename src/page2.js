import React from 'react';
import './page2.css';



function App2() {
  return (
    <div id = "newu" className="transbox">
      <header className="transbox-header">
        
      <p>
      <h1> New User Signup <br/></h1>
      <label for = "FName"> First  Name : &emsp; </label> 
    <input type="text" id = "FName" name ="FName"/> <br/><br/>
    <label for = "LName"> Last  Name : &emsp; </label> 
    <input type="text" id = "LName" name ="LName"/> <br/><br/>
    <label for = "Pnum"> Phone number :  &emsp; </label> 
    <input type="number" id = "Pnum" name ="Pnum"/> <br/><br/>
    <label for = "Puname"> Prefered User name : </label> 
    <input type="text" id = "Puname" name ="Puname"/> <br/><br/>
    <label for = "npassword"> New Password :  </label> 
    <input type="password" id = "npassword" name ="npassword"/> <br/><br/>
    <label for = "npassword"> Renter Password :  </label> 
    <input type="password" id = "npassword" name ="npassword"/> <br/><br/>
 
    </p>
        <a onClick href = "page.js">
    <button for = "create">  create </button>
    </a><br/>
    
  
      </header>
    </div>
  );
}

export default App2;