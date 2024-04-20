import React from 'react'
import './css/login.css'
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const LoginSection = (props) => {
  return (
    <div className='login'>
        <h3>Signup as {props.user}</h3>
        <TextField id="filled-basic" label={props.label1} variant="filled"/>
        <TextField id="filled-basic" label={props.label2} variant="filled" style={{marginTop:'0.5rem'}}/>
        <TextField id="filled-basic" label="Email Id" variant="filled" style={{marginTop:'0.5rem'}}/>
        <TextField id="filled-basic" label="Phone Number" variant="filled" style={{marginTop:'0.5rem'}}/>
        <TextField id="filled-basic" label="Password" variant="filled" style={{marginTop:'0.5rem'}}/>
        <Button variant="contained" size='large' style={{ width: '13.5rem', margin: '10px' }}>Signup</Button>
    </div>
  )
}

export default LoginSection