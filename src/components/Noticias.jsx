import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Noticia from './Noticia';
import './noticias.css';
import NoticiasLogo from '../assets/NOTÍCIAS.png';
import { Link } from 'react-router-dom';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/noticias.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('JSON Data:', data); // Log the JSON data to the console
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNoticias(sortedData.slice(0, 4));
      } catch (error) {
        console.error('Error fetching the noticias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='noticias' className="min-h-fit-content flex flex-col items-center" style={{ backgroundColor: '#DFEFA6', paddingBottom: '4%', paddingTop:'4%' }}>
      <div className="w-full flex justify-between items-start mb-16">
        <img src={NoticiasLogo} alt="Imagem" className="pl-24 pt-8" />
        <Link to="/news" className="link-custom mt-8 mr-24">
          Ver todas as notícias <FontAwesomeIcon icon={faArrowRight} className="icon-custom" />
        </Link>
      </div>
      {noticias.length > 0 ? (
        noticias.map((noticia, index) => (
          <Noticia 
            key={index}
            id={noticia.id} 
            title={noticia.title} 
            author={noticia.author}
            text={noticia.text}
            date={noticia.date}
          />
        ))
      ) : (
        <p>Loading noticias...</p>
      )}
    </div>
  );
};

export default Noticias;
