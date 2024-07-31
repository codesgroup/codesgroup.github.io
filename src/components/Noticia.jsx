import React from 'react';
import { Link } from 'react-router-dom';

const Noticia = ({ id, title, author, text, date }) => {
  return (
    <Link to={`/news/${id}`} className="news-item" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-custom m-4 transform transition-transform duration-300 hover:scale-105 p-6">
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-black text-base">{title}</h2>
            <p className="text-gray-500 text-xs">{date}</p>
          </div>
          <p className="noticia-text text-black text-sm font-normal mb-2">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Noticia;
