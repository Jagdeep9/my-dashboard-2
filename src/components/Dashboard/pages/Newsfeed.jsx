import React from 'react'
import Dashboard from '../Dashboard'
import Box from '@mui/material/Box';
import  { useState, useEffect } from 'react';

export default function Newsfeed() {//in this we are using new api to fetch news and show the news in the dashboard 
    const [news, setNews] = useState([]);

    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d16af78a0b734e51aafa5c92bdeda2d8')
        .then(response => response.json())
        .then(data => setNews(data.articles))
        .catch(error => console.error(error));
    }, []);
  return (
    <>
    <Box sx={{ display: "flex" }}>
     <Dashboard/>
     <Box component="main" sx={{overflow: "hidden"}}>
     <h1 className='name12'>Newsfeed</h1>
     <div className='box1'>
      {news.map((article, index) => (
        <div className='box2' key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img className='img4' src={article.urlToImage} alt={article.title} />
        </div>
      ))}
    </div>
     </Box>
    

    </Box>

    
</>
  );
}
