import logo from './logo.svg';
import React from 'react';
import './App.css';
import SignIn from './SignIn';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
     
      <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signIn" />} />
        <Route exact path="/signIn" element={<SignIn />} component={SignIn} />
        <Route path="/login" Component={Login} />
      </Routes>
      </Router>

      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
        
     
   
     
      
    </div>
  );
}

export default App;
