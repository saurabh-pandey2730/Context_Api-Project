import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    
    if(!user) return <div><h1>please login</h1></div>
  return (
    <div>
      <h1>Welcome</h1>
      <h2>{user.username}</h2>
    </div>
  )
}

export default Profile
