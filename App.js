
import React, { useState } from 'react';
import { navigate } from '@reach/router';
import './App.css';


function Projectinput() {

  const Join_project = () => {
    navigate('/join');
  };
  
  const New_project  = () => {
    navigate('/new');
  };

  return(
    <div>
      <div class = "project"><h1>Project Details</h1></div>
      <form>
        <div class = "ID"><label>
          Project ID: 
          <input type="text"/>
        </label></div>
        <div class = "join"><button onClick={Join_project}>Join Project</button></div>
        <div class = "new"><button onClick={New_project}>Create a New Project</button></div>
      </form>
      
    </div>
  )
}

export default Projectinput;