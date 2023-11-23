import { useState, useEffect } from "react";

function UserList () {

  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    try{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      // console.log(data);
    } catch (error){
      console.error("Error fetching data:", error);
    }};

  return (
    <div>
      <h1>Userlist</h1>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>      
    </div>
  )
}

export default UserList;