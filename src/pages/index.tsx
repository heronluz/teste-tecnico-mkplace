import Image from "next/image";

import logoImg from '../assets/logo-mkplace.svg'
import PaperImg from '../assets/PaperList.svg'
import IconList from '../assets/Icon.svg'
import CloseIcon from '../assets/closeIcon.svg'




interface HomeProps {
  listsFinded: number;
}

function Home(props: HomeProps) {
  return (
    <div className="w-72 h-screen mx-auto flex justify-center items-center">
      <main>
        <div className="mx-2">
          <Image src={logoImg} alt="MKPlace logo" />
        </div>

        <div className='mt-9 py-3 px-3.5 flex items-center gap-3 border rounded-lg border-gray-300 mix-blend-normal border-opacity-60' >

          <div className="w-12 h-12 flex justify-center bg-gray-400 rounded-lg bg-opacity-70">
            <Image src={PaperImg} alt="" />
          </div>

          <div className='flex flex-col'>
            <strong className='text-black text-sm '>
              <span>Lista 56431</span>
            </strong>
            <div className='text-gray-500 text-xs '>
              <span className=' text-gray-500 text-xs '>1{props.listsFinded}</span> categorias /
              <span className='text-gray-500 text-xs '> 1{props.listsFinded}</span> itens
            </div>
          </div>
          <div className="ml-12">
            <Image src={IconList} alt="" />
          </div>

        </div>

        <div className='mt-4 py-3 px-3.5 flex items-center gap-3 border rounded-lg bg-gray-100 border-red-300 border-opacity-60 bg-opacity-60 mix-blend-normal' >

          <div className="w-12 h-12 flex justify-center items-center bg-red-100 rounded-lg bg-opacity-40">
            <Image src={CloseIcon} alt="" />
          </div>
          <strong className='text-red-300 text-sm '>
            <span>Criar um lista de compras</span>
          </strong>
        </div>


      </main>
    </div>
  );
};

export default Home;