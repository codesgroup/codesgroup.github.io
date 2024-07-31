import React from 'react';
import { Link } from 'react-router-dom';

const Artigo = ({ id, title, authors, revista, text, date }) => {
  // Split the authors string into an array
  const authorsArray = authors ? authors.split(', ') : [];
  // Limit authors to two and add "..." if there are more than two authors
  const displayAuthors = authorsArray.length > 2 ? `${authorsArray.slice(0, 2).join(', ')}...` : authorsArray.join(', ');

  return (
    <Link to={`/artigos/${id}`} className="artigo-item" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-custom m-4 transform transition-transform duration-300 hover:scale-105 p-6">
        <div className="h-full flex flex-col justify-between">
          <h2 className="text-lg font-semibold text-black text-base mb-2">{title}</h2>
          <p className="text-black text-sm mb-2">
            <span className="underline">{displayAuthors}</span> • {revista}, {date}
          </p>
          <p className="artigo-text text-black text-sm font-normal mb-2">{text}</p>
          <div className="flex justify-between items-center">
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Artigo;
