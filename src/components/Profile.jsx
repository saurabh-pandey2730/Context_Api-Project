import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    
    if(!user) return <div><h1>please login</h1></div>
  return (
    <div style={{height :"250px", width:"350px",
     backgroundColor:"#F5F5F5", color:"black",
     marginLeft:"170px"}}>
      <h2 >Welcome</h2>
      <h1 style={{marginLeft:"30px"}}>{user.username.toUpperCase()}</h1>
      <h2 style={{marginLeft:"170px", fontSize:"45px"}}>{user.lastname}</h2>
    </div>
  )
}

export default Profile
