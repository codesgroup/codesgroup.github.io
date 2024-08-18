import React from 'react';
import { ReactComponent as TimeBar } from '../assets/O TIME.svg';

export const TimeSection = () => {
  return (
    <div id='time' className="Time text-center bg-black text-white ml-11 mt-80">
      <TimeBar />
      <div className='p-7 flex mt-11 justify-center'>
        <div id='left-col' className='w-1/3 flex flex-col items-end mr-24'>
          <h2 className='text-xl font-bold mb-2 ml-4 mr-7'>Professor</h2>
          <div className='flex flex-col'>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 text-right'>
              <span className='font-bold'><a className='hover:text-custom-green' href="http://darmiton.com" target="_blank" rel="noopener noreferrer">George Darmiton da Cunha Cavalcanti</a></span><br/>
              Professor Titular do Centro de Informática da UFPE
            </div>
          </div>

          <h2 className='text-xl font-bold mt-4 mb-4 mr-7'>Doutorado</h2>
          <div className='flex flex-col'>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 text-right'>
              <span className='font-bold'>Ingryd Pereira</span><br/>
              Doutoranda em Ciência da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 text-right'>
              <span className='font-bold'><a className='hover:text-custom-green' href="http://lattes.cnpq.br/4244055492368435" target="_blank" rel="noopener noreferrer">Johnathan Douglas F. Viana</a></span><br/>
              Doutorando em Ciência da Computação
            </div>
          </div>

          <h2 className='text-xl font-bold mb-2 ml-4 mr-7'>Mestrado</h2>
          <div className='flex flex-col'>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 text-right'>
              <span className='font-bold'>Leilane Cruz</span><br/>
              Mestranda em Ciência da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 text-right'>
              <span className='font-bold'>Lucas A. Lisboa</span><br/>
              Mestrando em Ciência da Computação
            </div>
          </div>
          <h2 className='text-xl font-bold mb-2 ml-4 mr-7'>Membros Associados</h2>
          <div className='flex flex-col'>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 text-right'>
              <span className='font-bold'>Francimaria Nascimento</span><br/>
              Doutoranda em Ciência da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 text-right'>
              <span className='font-bold'><a className='hover:text-custom-green' href="https://scholar.google.com/citations?user=jtYFoD0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Rafael Menelau Oliveira e Cruz</a></span><br/>
              Professor Assistente em ÉTS-Montréal
            </div>
          </div>
        </div>

        <div id='right-col' className='w-1/3 flex flex-col items-center'>
          <h2 className='text-xl font-bold w-full mb-2 text-left ml-16'>Graduação</h2>
          <div className='flex flex-wrap w-full'>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'>Bianca Lima</span><br/>
              Graduanda em Letras Português
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'>Camila Vieira</span><br/>
              Graduanda em Engenharia da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'>Ernesto Gonçalves</span><br/>
              Graduando em Ciência da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'>Igor Rocha</span><br/>
              Graduando em Ciência da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'>Joao Victor Cardoso Lopes</span><br/>
              Graduando em Engenharia da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'>Jose Vinicius de Santana Souza</span><br/>
              Graduando em Engenharia da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'><a className='hover:text-custom-green' href="http://lattes.cnpq.br/9030762311562076" target="_blank" rel="noopener noreferrer">Lucas Nascimento Brandao</a></span><br/>
              Graduando em Engenharia da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'>Marcelo Vinicius Bastos Santos</span><br/>
              Graduando em Engenharia da Computação
            </div>
            <div className='bg-black rounded-lg p-4 my-1 mx-4 w-full text-left'>
              <span className='font-bold'>Matheus Julio Boncsidai de Oliveira</span><br/>
              Graduando em Engenharia da Computação
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
