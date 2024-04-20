import React from 'react'
import './css/AddDetails.css'
import { TextField, Button } from '@mui/material'

const AddDetails = () => {
  return (
    <>
      <div className='addDetails'>
        <h1>Add new hostel</h1>
        <TextField id="filled-basic" label="Hostel Name" variant="filled" style={{margin:'0.5rem'}}/>
        <TextField id="filled-basic" label="Vacancy" variant="filled" style={{margin:'0.5rem'}}/>
        <TextField id="filled-basic" label="Vacancy" variant="filled" style={{margin:'0.5rem'}}/>
        <TextField id="filled-basic" label="Contact Number" variant="filled" style={{margin:'0.5rem'}}/>
        <TextField id="filled-basic" label="Mess" variant="filled" style={{margin:'0.5rem'}}/>
        <TextField id="filled-basic" label="image-link" variant="filled" style={{margin:'0.5rem'}}/>
        <TextField id="filled-basic" label="Rent Details" variant="filled" style={{margin:'0.5rem'}}/>
        <Button variant="contained" size='large' style={{ width: '13.5rem', margin: '10px' }}>Add Hostel</Button>
      </div>
    </>
  )
}

export default AddDetails