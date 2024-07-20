import React from 'react';
import { ReactComponent as TimeBar } from '../assets/O TIME.svg';

export const TimeSection = () => {
  return (
    <div id='time' className="Time text-center bg-black text-white ml-11 mt-80">
      <TimeBar />
      <div className=' p-7 flex mt-11'>
        <div id='col1' className='w-1/3'>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Bianca Nathally Bezerra de Lima<br/>
            bnbl@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Camila Barbosa Vieira<br/>
            cbv2@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Ernesto Gonçalves<br/>
            egln@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Francimaria Rayanne dos Santos Nascimento <br/>
            frsn2@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            George Darmiton da Cunha Cavalcanti<br/>
            gdcc@cin.ufpe.br
          </div>
        </div>

        <div id='col2' className='w-1/3'>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Igor Domingos da Rocha e Silva<br/>
            idrs@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Ingryd Vanessa de Sa Teles Pereira <br/>
            ivstp@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Joao Victor Cardoso Lopes <br/>
            jvcl@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Johnattan Douglas Ferreira Viana <br/>
            jdfv@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Jose Vinicius de Santana Souza <br/>
            jvss2@cin.ufpe.br
          </div>
        </div>

        <div id='col3' className='w-1/3'>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Leilane C <br/>
            lccl2@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Lucas Nascimento Brandao <br/>
            lnb@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Marcelo Vinicius Bastos Santos <br/>
            mvbs4@cin.ufpe.br
          </div>
          <div className=' bg-black rounded-lg p-4 my-8 mx-4  border-[#a8abe2] border-2'>
            Matheus Julio Boncsidai de Oliveira <br/>
            mjbo@cin.ufpe.br
          </div>
        </div>

      </div>
    </div>
  );
};
