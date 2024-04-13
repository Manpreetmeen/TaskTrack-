import React, { useState } from 'react'
import { addUsers } from '../redux/slice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Addusers() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const addUsersDeatail = () => {
        dispatch(addUsers(name))
    }
  return (
    <div className="container-main">

    <div className="users-container">
      <h1>Add Users</h1><br/>
      <input className="input-addusers" onChange={(e)=>setName(e.target.value)} type='text' placeholder='Add User'></input> <br/><br/>
      <button className="btn-addUsers" onClick={addUsersDeatail}>Add User</button> <br/>
      <Link to="/users"> Link to users</Link> <br/>
      <Link to="/apiData"> Link To APIS Data</Link>
    </div>
    </div>
  )
}
