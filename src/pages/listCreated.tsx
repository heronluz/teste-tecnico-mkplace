import Image from "next/image";

import IconLogo from '../assets/IconLogo.svg'
import ArrowLeft from '../assets/arrowLeft.svg'
import IconList from '../assets/Icon.svg'
import PaperImg from '../assets/PaperList.svg'
import IconUpload from '../assets/IconsUpload.svg'
import { useState } from "react";

import { ListItens } from "../components/listItens";

function CreateList() {

    const [quantValue, setValue] = useState(1);
    const [saveListItens, setSaveListItens] = useState(false)

    function stepDown(event: { preventDefault: () => void; }) {
        event.preventDefault()
        let num = quantValue - 1
        if (num < 0) {
            setValue(0);
        } else { setValue(num) };

    }

    function stepUp(event: { preventDefault: () => void; }) {
        event.preventDefault()
        let num = quantValue + 1
        setValue(num);
    }

    return (

        <div className="max-w-[1124px] h-screen mx-auto p-14 flex flex-col justify-center items-center">
            <div className="w-full h-20 mb-12 flex items-center">
                <div className="mr-6">
                    <Image src={IconLogo} alt="" />
                </div>
                <Image src={ArrowLeft} alt="" />
                <strong className="text-4xl ml-4">Lista 56431</strong>
            </div>

            <div className="w-full h-full mx-auto flex">
                <div className="max-h-[589px] w-[302px] flex flex-col gap-2">
                    <div className=" mr-4 overflow-y-auto py-3 px-3.5 flex flex-col gap-4 border rounded-lg border-gray-300 mix-blend-normal border-opacity-60">

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
                </div>

                <div className="h-[72px] flex items-center">
                    <Image src={IconList} alt="" />
                </div>

                <div className="w-[462px] h-[315px] ml-8 p-6 flex flex-col items-start gap-5 overflow-x-hidden border rounded-2xl border-gray-300 mix-blend-normal border-opacity-60">

                    <ListItens />

                </div>

            </div>
        </div >

    );

};

export default CreateList;