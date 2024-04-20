import React from 'react'
import './css/login.css'
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const LoginSection = (props) => {
  return (
    <div className='login'>
        <h3>Login as {props.user}</h3>
        <TextField id="filled-basic" label={props.label1} variant="filled"/>
        <TextField id="filled-basic" label={props.label2} variant="filled" />
        <Button variant="contained" size='large' style={{ width: '13.5rem', margin: '10px' }}>Login</Button>
    </div>
  )
}

export default LoginSection