import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Dashboard = ({}) => {
  const [capacity_webcam, setWebcam_Capacity] = useState(null);
  const [capacity_headset, setHeadset_Capacity] = useState(null);
  const [availability_headset, setHeadset_Availability] = useState(null);
  const [availability_webcam, setWebcam_Availability] = useState(null);
  const [headset, setHeadset] = useState(null);
  const [webcam, setWebcam] = useState(null);


  useEffect(() => {
    axios.get('/getWebCam_Capacity')
        .then((response) => setWebcam_Capacity(response.data.value))
        .catch(error => console.log(error));
  }, []);

  
  useEffect(() => {
    axios.get('/getHeadset_Capacity')
        .then((response) => setHeadset_Capacity(response.data.value))
        .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios.get('/getWebcam_Availability')
        .then((response) => setWebcam_Availability(response.data.value))
        .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios.get('/getHeadset_Availability')
        .then((response) => setHeadset_Availability(response.data.value))
        .catch(error => console.log(error));
  }, []);

  const handleInputChange_headset = (event) => {
    const value = event.target.value;

    // Check if the input is a valid whole number
    if (/^\d*$/.test(value)) {
      setHeadset(value);
    }
  };

  const handleInputChange_webcam = (event) => {
    const value = event.target.value;

    // Check if the input is a valid whole number
    if (/^\d*$/.test(value)) {
      setWebcam(value);
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if(headset.trim() === "" && webcam.trim() === ""){
      alert("No fields requested for checkout");
      return;
    }

    const response = await fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ headset, webcam }),
    });

    const data = await response.json();
    if(response.status === 200){
      toast.success('Checkout Succesful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        console.log(response)
        console.log(data)

        setHeadset_Availability(data.value.headset) 
        setWebcam_Availability(data.value.webcam)
        setHeadset('')
        setWebcam('')

    }else if(response.status === 500){
      toast.error('You have rquested for more items than available. Please request items within availability', {position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    }else {
      toast.error('Error checking out', {position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    }
  };
  
  return (
    <div>
      <h2>Dashboard1: {capacity_webcam} {capacity_headset} {availability_headset} {availability_webcam}</h2>
      <form>
        <div>
            <label>HW1:</label>
            <label>Availability</label>

        </div>

        <div>
            <input type="text" pattern="[0-9]*" value={headset} onChange={handleInputChange_headset} />
        </div>

        <div>
            <input type="text" pattern="[0-9]*" value={webcam} onChange={handleInputChange_webcam} />
        </div>
        <button type="submit" onClick = {handleCheckout} >Checkout</button>
      </form>
      
    </div>
  );  
};

export default Dashboard;