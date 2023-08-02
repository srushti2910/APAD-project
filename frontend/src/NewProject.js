import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
 
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if(projectName.trim() === "" || projectId.trim() === ""){
        alert("Please fill in all fields");
        return;
      }

    const response = await fetch("/createNewProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectName, projectId }),
    });

    const data = await response.json();
    console.log(response)
    if(response.status === 200){
        navigate("/dashboard")
    }else if(response.status === 500){
        toast.error('Project Id Aready Exists use different Project Id', {position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    }else{
        toast.error('Error creating project', {position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    }
  };

  return (
    <div>
      <h2>New Project</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Project Name:</label>
          <input type="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </div>
        <div>
          <label>Project Id:</label>
          <input type="projectId" value={projectId} onChange={(e) => setProjectId(e.target.value)} />
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );  
};

export default NewProject;