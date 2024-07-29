import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Noticia from './Noticia';
import './noticias.css';
import NoticiasLogo from '../assets/NOTÍCIAS.png';

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
    <div id='noticias' className="py-10 min-h-[105vh] flex flex-col items-center" style={{ backgroundColor: '#DFEFA6' }}>
      <div className="w-full flex justify-between items-start mb-12">
        <img src={NoticiasLogo} alt="Imagem" className="pl-24 pt-8" />
        <a href="/another-page" className="link-custom mt-8 mr-24">
          Ver todas as notícias <FontAwesomeIcon icon={faArrowRight} className="icon-custom" />
        </a>
      </div>
      {noticias.length > 0 ? (
        noticias.map((noticia, index) => (
          <Noticia 
            key={index}
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
