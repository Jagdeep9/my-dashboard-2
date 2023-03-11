import React from 'react'
import Dashboard from '../Dashboard'
import Box from '@mui/material/Box';
import  { useState, useEffect } from 'react';

export default function Thoughts() {

    const url = "https://api.quotable.io/random";


  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  

  const { content, author } = quotes;
  
  return (
    <>
    <Box sx={{ display: "flex" }}>
     <Dashboard/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

     <h1 className='name12'>Thoughts</h1>
     <div className="box-centerside">
      <div className="text">
        <p>{content}</p>
      </div>
      <div className="author">
        <h5>{author}</h5>
        <div className="button-container">
         
          <button className="btn3" onClick={getNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
     </Box>
    

    </Box>

    
</>
  );
}