import Image from "next/image";

import IconLogo from '../assets/IconLogo.svg'
import ArrowLeft from '../assets/arrowLeft.svg'
import IconList from '../assets/Icon.svg'
import PaperImg from '../assets/PaperList.svg'
import IconUpload from '../assets/IconsUpload.svg'
import { useState } from "react";

import { SaveList } from "../components/saveList";

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
                <strong className="text-4xl ml-4">Criando Lista de Compras</strong>
            </div>

            <div className="w-full h-full mx-auto flex">
                <div className="max-h-[589px] w-[302px] flex flex-col gap-2">
                    <div className=" mr-4 overflow-y-auto py-3 px-3.5 flex flex-col gap-2 border rounded-lg border-gray-300 mix-blend-normal border-opacity-60">

                        <div className='flex items-center gap-3' >
                            <div className="w-12 h-12 flex justify-center bg-gray-400 rounded-lg bg-opacity-70">
                                <Image src={PaperImg} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <strong className='text-black text-sm '>
                                    <span>Lista</span>
                                </strong>
                                <div className='text-gray-500 text-xs '>
                                    <span className=' text-gray-500 text-xs '>0</span> categorias /
                                    <span className='text-gray-500 text-xs '>0</span> itens
                                </div>
                            </div>

                        </div>

                        {saveListItens
                            ?
                            <div className="pt-2 flex flex-col gap-4 w-full border-t border-gray-300 mix-blend-normal border-opacity-40">
                                <SaveList />
                            </div>
                            :
                            <></>
                        }



                    </div>

                    {saveListItens
                        ?
                        <div className="mr-4 pt-3">

                            <button type="submit" className="w-full bg-gray-70 px-6 py-3 rounded-[8px] text-[#FF0000] font-bold text-sm leading-[21px] border border-red-300 hover:bg-gray-200">Concluir Lista</button>

                        </div>
                        :
                        <></>
                    }

                </div>

                <div className="h-[72px] flex items-center">
                    <Image src={IconList} alt="" />
                </div>

                <form className="w-[676px] h-[589px] ml-8 p-6 flex flex-col items-start gap-4 overflow-x-hidden border rounded-2xl border-gray-300 mix-blend-normal border-opacity-60">

                    <div className="flex flex-col w-full">
                        <label className="text-xs mb-[6px] font-semibold leading-[18px]">Selecione a categoria do produto</label>
                        <select defaultValue="" className="appearance-none text-sm text-gray-400 bg-arrowDown bg-no-repeat bg-origin-content bg-right w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                            <option hidden >Pesquise por uma categoria. Ex. Enlatados</option>
                            <option>First option</option>
                            <option>second option</option>
                            <option>Thrid option</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-xs mb-[6px] font-semibold leading-[18px]">Selecione uma subcategoria do produto</label>
                        <select defaultValue="" className="appearance-none text-sm text-gray-400 bg-arrowDown bg-no-repeat bg-origin-content bg-right w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                            <option hidden >Pesquise por uma categoria. Ex. Conservantes</option>
                            <option>First option</option>
                            <option>second option</option>
                            <option>Thrid option</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-xs mb-[6px] font-semibold leading-[18px]">Nome do produto</label>
                        <input type="text" placeholder="e.g Milho verde em conserva" className=" placeholder-gray-400 text-sm w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60" />
                    </div>

                    <div className="flex gap-4 w-full border-t border-gray-300 mix-blend-normal border-opacity-60">
                        <div className="mt-3 flex w-[265px] flex-col">
                            <label className="text-xs mb-[6px] font-semibold leading-[18px]">Tipo</label>
                            <select defaultValue="" className="appearance-none text-sm text-gray-400 bg-arrowDown bg-no-repeat bg-origin-content bg-right w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                                <option hidden>Selecione a unidade</option>
                                <option>Unidade</option>
                                <option>Kg</option>
                            </select>
                        </div>
                        <div className="mt-3 flex w-[192px] flex-col">
                            <label className="text-xs mb-[6px] font-semibold leading-[18px]">Preço</label>
                            <input type="text" placeholder="R$" className=" placeholder-gray-400 text-sm w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60" />
                        </div>
                        <div className=" mt-3 flex w-[138px] flex-col">
                            <label className="text-xs mb-[6px] font-semibold leading-[18px]">Quantidade</label>
                            <div className="flex w-full placeholder-gray-400 text-sm h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                                <button onClick={stepDown} className="cursor-pointer h-12 w-full text-3xl flex justify-center items-center font-extralight"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                                </button>
                                <input pattern="[0-9]+([,\.][0-9]+)?" id="quantity" className="h-11 w-full text-center text-base font-medium border-none " readOnly value={quantValue} type="number" />
                                <button onClick={stepUp} className="cursor-pointer h-12 w-full text-3xl flex justify-center items-center font-extralight">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full border border-gray-300 border-dashed rounded-xl mix-blend-normal border-opacity-60 cursor-pointer  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex items-center justify-center py-4 ">
                                <div className="w-[60px] h-[60px] flex content-center">
                                    <Image src={IconUpload} alt="" />
                                </div>
                                <div >
                                    <strong className="mb-2 text-black text-base"><span>Arraste o arquivo ou clique aqui para selecionar</span></strong>
                                    <p className="text-xs leading-[21px] font-normal text-gray-500">PNG, GIF ou JPEG. Tamanho máximo de arquivo 1 Mb.</p>
                                </div>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>

                    <div className="flex gap-4 w-full border-t pt-4 border-gray-300 mix-blend-normal border-opacity-60">
                        <button type="submit" className="w-[306px] bg-[#F45252] px-6 py-3 rounded-[8px] text-white font-bold text-sm hover:bg-[#dc3434]">Adicionar item</button>
                    </div>

                </form>

            </div>
        </div >

    );

};

export default CreateList;