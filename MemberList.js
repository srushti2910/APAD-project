import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MemberList = () => {
  // State to store the data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch JSON data from the API
    axios.get('http://localhost:5000/members')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Member List</h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.user_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;