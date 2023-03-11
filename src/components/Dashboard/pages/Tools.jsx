import React from 'react'
import Dashboard from '../Dashboard'
import Box from '@mui/material/Box';
import Calculator from './calculator/Calculator';
import AddNotes from './AddNotes';
export default function Tools() { //we have created 2 tool calculator and addnotes and calling both of them on the same page
  return (
    <>
    <Box sx={{ display: "flex" }}>
     <Dashboard/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <h1 className='name12'>Tools</h1>
   
  
   <div className='tools1'>
      <Calculator/>

      
      <AddNotes/>
      </div>
 
   
     </Box>
    

    </Box>

    
</>
  );
}
