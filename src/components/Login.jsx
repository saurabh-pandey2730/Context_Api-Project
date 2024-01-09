import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [lastname, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, lastname})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {"     "}
        <input type='text' 
        value={lastname}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='lastname'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login