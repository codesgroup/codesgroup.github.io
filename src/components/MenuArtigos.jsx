import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Artigo from './Artigo'; // Componente que renderiza um artigo
import './MenuArtigos.css'; // Specific CSS for MenuArtigos
import ArtigosLogo from '../assets/ARTIGOS.png';
import { Link } from 'react-router-dom';
import { TopBar } from './TopBar';

export const MenuArtigos = () => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/artigos.json'); // Certifique-se de ter um arquivo artigos.json
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('JSON Data:', data); // Log the JSON data to the console
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArtigos(sortedData);
      } catch (error) {
        console.error('Error fetching the artigos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="outer-container" className="outer-container" style={{ backgroundColor: '#DFEFA6' }}>
      <TopBar />
      <div id="menu-artigos" className="menu-artigos py-10 flex flex-col items-center">
        <div className="w-full flex justify-between items-start mb-12">
          <img src={ArtigosLogo} alt="Imagem" className="pl-24 pt-8" />
          <Link to="/" className="link-custom mt-8 mr-24">
            Voltar para a página inicial <FontAwesomeIcon icon={faArrowRight} className="icon-custom" />
          </Link>
        </div>
        {artigos.length > 0 ? (
          artigos.map((artigo, index) => (
            <Artigo 
              key={index}
              id={artigo.id}
              title={artigo.title}
              authors={artigo.authors} // Pass authors correctly
              revista={artigo.revista} // Pass revista correctly
              text={artigo.text}
              date={artigo.date}
            />
          ))
        ) : (
          <p>Loading artigos...</p>
        )}
      </div>
    </div>
  );
};

export default MenuArtigos;
