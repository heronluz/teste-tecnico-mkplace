import Image from "next/image";

import IconLogo from '../assets/IconLogo.svg'
import IconList from '../assets/Icon.svg'
import PaperImg from '../assets/PaperList.svg'
import IconUpload from '../assets/IconsUpload.svg'
import { useState } from "react";

import { ListItens } from "../components/listItens";
import Link from "next/link";

function CreateList(id: string) {

    const [quantValue, setValue] = useState(1);
    const [saveListItens, setSaveListItens] = useState(false)

    return (

        <div className="max-w-full lg:max-w-[1124px] h-auto lg:h-screen mx-auto px-4 lg:py-5 lg:p-14 flex flex-col lg:justify-center lg:items-center">
            <div style={{ zIndex: '20' }} className="fixed lg:relative w-full h-20 mb-8 lg:mb-12 flex items-center bg-white lg:bg-transparent ">
                <div className="hidden lg:block lg:mr-6">
                    <Image src={IconLogo} alt="" />
                </div>
                <Link href={"/"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 lg:w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                </Link>
                <strong className="text-xl flex lg:text-4xl ml-4">
                    <span>Lista </span>
                    &nbsp;
                    <span className=""> 56431</span>
                </strong>
            </div>

            <div className="mt-20 lg:mt-0 w-full h-full mx-auto flex flex-col lg:flex-row">
                <div style={{ zIndex: '20' }} className="fixed lg:relative bg-white lg:bg-transparent pr-8 lg:pr-0 lg:mt-0 max-h-full w-full lg:max-h-[589px] lg:w-[302px] flex flex-col gap-2">
                    <div className=" lg:mr-4 overflow-y-auto lg:py-3 lg:px-3.5 flex flex-col gap-4 lg:border rounded-lg border-gray-300 mix-blend-normal border-opacity-60">

                        <div className='flex items-center gap-3' >
                            <div className="w-12 h-12 flex justify-center bg-gray-400 rounded-lg bg-opacity-70">
                                <Image src={PaperImg} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <strong className='text-black text-sm '>
                                    <span>Lista 56431</span>
                                </strong>
                                <div className='text-gray-500 text-xs '>
                                    <span className=' text-gray-500 text-xs '>2</span> categorias /
                                    <span className='text-gray-500 text-xs '>6</span> itens
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center gap-3' >
                            <div className="w-full flex justify-start  items-center">
                                <strong className='text-black text-sm '>
                                    <span>Total do carrinho</span>
                                </strong>
                            </div>
                            <div className='w-full flex justify-end text-gray-500 text-xs'>
                                <strong className='text-black text-sm '>
                                    <span>R$</span> 102,00
                                </strong>
                            </div>
                        </div>

                    </div>

                    <div className="mb-4 lg:mb-0 lg:hidden w-full border-t border-gray-300 mix-blend-normal border-opacity-40" />

                </div>

                <div className="hidden h-[72px] lg:flex items-center">
                    <Image src={IconList} alt="" />
                </div>


                <ListItens idLista={id} />


            </div>
        </div >

    );

};

export default CreateList;