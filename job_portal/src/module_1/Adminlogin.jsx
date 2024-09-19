import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <br /><br />

<h2>  ADMIN LOGIN</h2>
<TextField label="Phone number,username or email" variant="outlined" /><br /><br />
<TextField label="Password" type="password" /><br /><br />
<Button variant="contained">Log In</Button>  <br /><br />
 ----------------- OR -----------------
 <br /><br />

 <Link to="/login">
 User Log In</Link>
    </div>
  )
}

export default Login