import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopBarTwo } from './TopBarTwo'; // Certifique-se de que o caminho está correto
import { FaArrowLeft } from 'react-icons/fa'; // Import the arrow icon
import './NoticiasDetalhadas.css'; // Importe o arquivo CSS

const NoticiasDetalhadas = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <div className="noticia-detalhada-container">
      <TopBarTwo />
      <div className="noticia-detalhada-content">
        <div className="noticia-detalhada-header">
          <FaArrowLeft 
            className="back-arrow" 
            onClick={() => navigate('/news')} 
          />
          <h1>{noticia.title}</h1>
        </div>
        <h2 className="noticia-subtitle">{noticia.subtitulo}</h2> {/* Add subtitle here */}
        <a href={noticia.link} target="_blank" rel="noopener noreferrer" className="noticia-link">Leia a noticia completa</a>
        <p className="noticia-date">{noticia.date}</p>
        <p className="noticia-author">Por: {noticia.author}</p>
        <p style={{ whiteSpace: 'pre-wrap' }}>{noticia.text}</p> 
      </div>
    </div>
  );
};

export default NoticiasDetalhadas;
