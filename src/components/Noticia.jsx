import React from 'react';

const Noticia = ({ title, author, text, date }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-4xl m-4 transform transition-transform duration-300 hover:scale-105 p-6">
      <div className="h-full flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-black text-base mb-2">{title}</h2>
        <p className="text-black text-sm font-normal mb-2">{text}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-xs">{author}</p>
          <p className="text-gray-500 text-xs">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
