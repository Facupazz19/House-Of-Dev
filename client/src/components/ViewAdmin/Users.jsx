import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../ViewAdmin/users.css"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/users", { withCredentials: true })
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
        {users.map((users, i) => ( 
      <ol className="list-group" key={i}>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold nameMayus"> {users.name} {users.lastName} </div>
            {users.admin ? <div class="ms-2 me-auto ">User Admin</div> : <div class="ms-2 me-auto">User</div>  }
          </div>
          <span className="badge rounded-pill deletedUser"> <Link className="deletedUser">Deleted User</Link> </span>
        </li>
        
      </ol>
       ))}
    </div>
  );
};
export default Users;
