import React from 'react'

import Dashboard from '../Dashboard'
import Box from '@mui/material/Box';


export default function Mydashboard() {

  return (
    <>
    <Box sx={{ display: "flex" }}>
     <Dashboard/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <h1 className='name12'>MyDashboard</h1>
     </Box>
    

    </Box>

    
</>
  );
}

