// NoticiasDetalhadas.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TopBar } from './TopBar'; // Certifique-se de que o caminho está correto
import './NoticiasDetalhadas.css'; // Importe o arquivo CSS

const NoticiasDetalhadas = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/noticias.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const noticiaEncontrada = data.find(n => n.id === parseInt(id));
        setNoticia(noticiaEncontrada);
      } catch (error) {
        console.error('Error fetching the noticia:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!noticia) {
    return <p>Loading noticia...</p>;
  }

  return (
    <div className="noticia-detalhada-container" style={{ backgroundColor: '#DFEFA6', minHeight:'fit-content' }}>
      <TopBar />
      <div className="noticia-detalhada-content">
        <h1>{noticia.title}</h1>
        <a href={noticia.link} target="_blank" rel="noopener noreferrer"style={{marginBottom:'20%' }}>Leia a noticia completa</a>
        <p>{noticia.date}</p>
        <p>Por: {noticia.author}</p>
        <p style={{ whiteSpace: 'pre-wrap' }}>{noticia.text}</p> 
        
      </div>
    </div>
  );
};

export default NoticiasDetalhadas;
