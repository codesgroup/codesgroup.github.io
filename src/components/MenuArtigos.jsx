import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Artigo from './Artigo'; 
import './MenuArtigos.css'; 
import TodosArtigosLogo from '../assets/TODOS OS ARTIGOS .png';
import { Link } from 'react-router-dom';
import { TopBarTwo } from './TopBarTwo';

export const MenuArtigos = () => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/artigos.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('JSON Data:', data); 
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArtigos(sortedData);
      } catch (error) {
        console.error('Error fetching the artigos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="outer-container" className="outer-container">
      <TopBarTwo/>
      <div id="menu-artigos" className="menu-artigos py-10 flex flex-col items-center">
        <div className="w-full flex justify-between items-start mb-12">
          <img src={TodosArtigosLogo} alt="Logo" className="logo"  style={{ marginTop: '10%' , marginLeft:'1%', width:'fit-content', height:'fit-content'}} />
          <Link to="/" className="link-custom" style={{ marginTop: '10%', marginRight:'6%' }}>
            Voltar para a página inicial <FontAwesomeIcon icon={faArrowRight} className="icon-custom" />
          </Link>
        </div>
        {artigos.length > 0 ? (
          artigos.map((artigo, index) => (
            <Artigo 
              key={index}
              id={artigo.id}
              title={artigo.title}
              authors={artigo.authors} 
              revista={artigo.revista} 
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
