import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUsers } from "../redux/slice"

export default function UsersDetails() {
    const userData = useSelector((data) => data.users)
    console.log(userData)
    const dispatch = useDispatch();
    
  return (
    <div>
      <h1>Users detail</h1>
      <Link to="/">Home</Link>
      {
        userData.map((item)=> (
            <div key={item.id}>
                <span >{item.name}</span>
                <button onClick={()=> dispatch(removeUsers(item.id))}>Remove</button>
            </div>
        ))
      }
    </div>
  )
}
