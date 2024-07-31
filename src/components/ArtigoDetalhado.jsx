import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TopBar } from './TopBar'; // Certifique-se de que o caminho está correto
import './ArtigoDetalhado.css'; // Importe o arquivo CSS

const ArtigoDetalhado = () => {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/artigos.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const artigoEncontrado = data.find(n => n.id === parseInt(id));
        setArtigo(artigoEncontrado);
      } catch (error) {
        console.error('Error fetching the artigo:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!artigo) {
    return <p>Loading artigo...</p>;
  }

  return (
    <div className="artigo-detalhado-container">
      <TopBar />
      <div className="artigo-detalhado-content">
        <h1>{artigo.title}</h1>
        <p style={{ fontWeight: 'bold' }}>{artigo.authors}</p>
        <p>{artigo.date} • <span className="revista">{artigo.revista}</span></p>
        <a href={artigo.link} target="_blank" rel="noopener noreferrer">Leia o artigo completo</a>
        <h2>Abstract</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{artigo.text}</p>
        <h2>Introdução</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{artigo.introduction}</p>
      </div>
    </div>
  );
};

export default ArtigoDetalhado;
