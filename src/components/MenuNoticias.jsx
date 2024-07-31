import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Noticia from './Noticia';
import './MenuNoticias.css'; // Specific CSS for MenuNoticias
import NoticiasLogo from '../assets/NOTÍCIAS.png';
import { Link } from 'react-router-dom';
import { TopBar } from './TopBar';

export const MenuNoticias = () => {
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
        setNoticias(sortedData);
      } catch (error) {
        console.error('Error fetching the noticias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="outer-container" className="outer-container" style={{ backgroundColor: '#DFEFA6', minHeight:'100%' }}>
      <TopBar />
      <div id="menu-noticias" className="menu-noticias py-10 flex flex-col items-center">
        <div className="w-full flex justify-between items-start mb-12">
          <img src={NoticiasLogo} alt="Imagem" className="pl-24 pt-8" />
          <Link to="/" className="link-custom mt-8 mr-24">
            Voltar para a página inicial <FontAwesomeIcon icon={faArrowRight} className="icon-custom" />
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
    </div>
  );
};

export default MenuNoticias;
