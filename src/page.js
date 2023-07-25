import React from 'react';
import ReactDOM from 'react-dom/client';
import './page.css';
import App2 from './page2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

function App() {
  return (
    <div className="transbox">
      <header className="transbox-header">
        
      <p>
        <h1> "The Gadget Grove"<br/></h1>
    <h4>Why Buy when you can Borrow</h4>
    
    <br/><br/>
      
    <label for = "userid">   User id : &ensp; </label> 
    <input type="text" id = "userid" name =" username"/> <br/><br/>
    <label for = "password">   Password :  </label> 
    <input type="password"  id = "password" name ="password"/> <br/><br/>
    
        </p>
        <a href = "prodet.js">
        <button for = "submit">  submit </button><br/>
        </a><br/>
    <a href = "/page2"> New User? click me </a>
  
      </header>
    </div>
  );
}

export default App;

