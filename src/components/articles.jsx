import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from "./article.jsx";
import "../sellform.css";

const ArticleList = ({history}) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
      const getArticles = async () => {

          try {
              const {data} = await axios.get('http://localhost:8080/articles')
              console.log('data')
              console.log(data)
              setArticles(data)

          } catch (error) {
              console.log(error)
          }

      };
      getArticles()
  }, [history])
  
  return(
    <>
        <div id="buyarticle" className='text-center'> 
            <div className='section-title text-center'>
                <div className='container'>
                    <h2> buy an article </h2>
                        {console.log('articles')}
                        {console.log(articles)}
                        
                        {articles.map((article) => (
                            <Article article={article} />
                        ))}
                </div>
            </div>
        </div>

        <div id='footer'>
            <div className='container text-center'>
                <p>
                &copy; 2021 WhatiBuy Webprogrammierung.
                </p>
            </div>
        </div>
    </>
    
  );
}
export default ArticleList;