import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h4'component="div" color='white' align='left' sx={{flexGrow:1}}>Job Portal</Typography>
          <Link to="/home">
          <Button variant="contained" color='success'>Home</Button></Link>&nbsp;
          <Link to="/login">
          <Button variant="contained" color='warning'>Login</Button></Link>&nbsp;
          <Link to="/signup">
          <Button variant='contained' color='error'>Signup</Button></Link>&nbsp;
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Nav
