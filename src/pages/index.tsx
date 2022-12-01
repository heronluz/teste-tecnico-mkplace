import Image from "next/image";

import logoImg from '../assets/logo-mkplace.svg'
import CloseIcon from '../assets/closeIcon.svg'
import Link from "next/link";

import Lists from "../components/lists";


function Home() {



  return (
    <div className="w-60 md:w-64 lg:w-72 h-screen mx-auto flex justify-center items-center">
      <main>
        <div className="mx-0 md:mx-1 lg:mx-2">
          <Image src={logoImg} alt="MKPlace logo" />
        </div>

        <div className='max-h-72 overflow-y-auto mt-7 md:mt-8 lg:mt-9 py-1 md:py-2 lg:py-3 px-1.5 md:px-2.5 lg:px-3.5 flex flex-col items-center gap-1 md:gap-2 lg:gap-3 border rounded-lg border-gray-300 mix-blend-normal border-opacity-60' >

          <Lists />

        </div>

        <Link href={"/createList"}>
          <div className='cursor-pointer mt-2 md:mt-3 lg:mt-4 py-1 md:py-2 lg:py-3 px-1.5 md:px-2.5 lg:px-3.5 flex items-center gap-1 md:gap-2 lg:gap-3 border rounded-lg bg-gray-100 border-red-300 border-opacity-60 bg-opacity-60 mix-blend-normal' >

            <div className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 flex justify-center items-center bg-red-100 rounded-lg bg-opacity-40">
              <Image src={CloseIcon} alt="" />
            </div>
            <strong className='text-red-300 text-sm '>
              <span>Criar uma lista de compras</span>
            </strong>
          </div>
        </Link>


      </main>
    </div>
  );
};

export default Home;
