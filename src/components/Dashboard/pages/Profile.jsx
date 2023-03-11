import React, {useEffect, useState} from 'react'
import Dashboard from '../Dashboard'
import Box from '@mui/material/Box';
import {app,auth} from '../../../firebase';
//import { useEffect } from 'react'

export default function Profile() {//in this we are fetching the current user data and show them on the profile that which user is logged in 
  const [user, setUser] = useState(null)
useEffect(() => {
  setUser(auth.currentUser)
  console.log(auth.currentUser)
})

  return (
    <>
    <Box sx={{ display: "flex" }}>
     <Dashboard/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <h1 className='name12'>Profile</h1>
     <div className='bg9'>
     <img className="User3" src="https://images.unsplash.com/photo-1471938537155-7de0bd123d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"></img>
     <div className='flex4'>
     <label>Name:</label>
     <p>{user && user.displayName}</p>
     </div>
     <div className='flex4'>
     <label>Email:</label>
     <p>{user && user.email}</p>
     </div>
     </div>
     </Box>
    

    </Box>

    
</>
  );
}
