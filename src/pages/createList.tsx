import Image from "next/image";

import IconLogo from '../assets/IconLogo.svg'
import IconList from '../assets/Icon.svg'
import PaperImg from '../assets/PaperList.svg'
import IconUpload from '../assets/IconsUpload.svg'
import { useState } from "react";

import { SaveList } from "../components/saveList";
import Modal from "../components/Modal";
import Link from "next/link";

function CreateList() {

    const [quantValue, setValue] = useState(1);
    const [saveListItens, setSaveListItens] = useState(true)
    const [modal, setModal] = useState(false)


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

    const showCloseModal = (childData: boolean | ((prevState: boolean) => boolean)) => {

        setModal(childData)

    }

    return (

        <div className="max-w-full lg:max-w-[1124px] h-auto lg:h-screen mx-auto px-4 lg:py-5 lg:p-14 flex flex-col lg:justify-center lg:items-center">

            {/* MODAL DE ALERT */}
            {modal ?
                < Modal sModal={showCloseModal} />
                :
                null
            }

            <div style={{ zIndex: '20' }} className="fixed lg:relative w-full h-20 mb-8 lg:mb-12 flex items-center bg-white lg:bg-transparent ">
                <div className="hidden lg:block lg:mr-6">
                    <Image src={IconLogo} alt="" />
                </div>

                <div onClick={() => setModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 lg:w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <strong className="text-xl flex lg:text-4xl ml-4">
                    <span>Criando Lista </span>
                    &nbsp;
                    <span className="hidden lg:block"> de Compras</span>
                </strong>
            </div>

            <div className="mt-20 lg:mt-0 w-full h-full mx-auto flex">
                <div className="mt-[1px] lg:mt-0 max-h-full w-full lg:max-h-[589px] lg:w-[302px] flex flex-col gap-2">
                    <div className="mb-[152px] lg:mb-0 lg:mr-4 overflow-y-auto py-3 px-3.5 flex flex-col gap-2 border rounded-lg border-gray-300 mix-blend-normal border-opacity-60">

                        <div style={{ zIndex: '10' }} className='flex items-center gap-3' >
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
                            <div className="pt-2 flex flex-col gap-2 lg:gap-4 w-full border-t border-gray-300 mix-blend-normal border-opacity-40">
                                <SaveList />

                            </div>
                            :
                            <></>
                        }



                    </div>

                    {saveListItens
                        ?
                        <div className="fixed lg:relative w-full pr-8 bottom-0 bg-white lg:bg-transparent py-6 lg:py-0 lg:pr-4 lg:mr-4 flex flex-col gap-3 lg:pt-3">

                            <button type="submit" className="lg:hidden w-full bg-gray-70 px-6 py-3 rounded-[8px] text-[#FF0000] font-bold text-sm leading-[21px] border border-red-300 lg:hover:bg-gray-200">Adicionar novo item</button>

                            <button type="submit" className="w-full bg-[#F45252] px-6 py-3 rounded-[8px] text-white font-bold text-sm hover:bg-[#dc3434] lg:bg-gray-70   lg:text-[#FF0000] lg:leading-[21px] lg:border lg:border-red-300 lg:hover:bg-gray-200">Concluir Lista</button>

                        </div>
                        :
                        <></>
                    }

                </div>

                <div className="hidden lg:h-[72px] lg:flex items-center">
                    <Image src={IconList} alt="" />
                </div>

                <form className="hidden w-full lg:w-[676px] h-full lg:h-[589px] lg:ml-8 lg:p-6 lg:flex flex-col items-start gap-4 lg:border lg:rounded-2xl border-gray-300 mix-blend-normal border-opacity-60">
                    <div className="flex flex-col w-full">
                        <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Selecione a categoria do produto</label>
                        <select defaultValue="" className="appearance-none text-xs lg:text-sm text-gray-400 bg-arrowDown bg-no-repeat bg-origin-content bg-right w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                            <option hidden >Pesquise por uma categoria. Ex. Enlatados</option>
                            <option>First option</option>
                            <option>second option</option>
                            <option>Thrid option</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Selecione uma subcategoria do produto</label>
                        <select defaultValue="" className="appearance-none text-xs lg:text-sm text-gray-400 bg-arrowDown bg-no-repeat bg-origin-content bg-right w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                            <option hidden >Pesquise por uma categoria. Ex. Conservantes</option>
                            <option>First option</option>
                            <option>second option</option>
                            <option>Thrid option</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Nome do produto</label>
                        <input type="text" placeholder="e.g Milho verde em conserva" className=" placeholder-gray-400 text-xs lg:text-sm w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 w-full border-t border-gray-300 mix-blend-normal border-opacity-60">

                        <div className="mt-4 flex lg:w-[265px] flex-col">
                            <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Tipo</label>
                            <select defaultValue="" className="appearance-none text-xs lg:text-sm text-gray-400 bg-arrowDown bg-no-repeat bg-origin-content bg-right w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                                <option hidden>Selecione a unidade</option>
                                <option>Unidade</option>
                                <option>Kg</option>
                            </select>
                        </div>

                        <div className="flex flex-row-reverse lg:flex-row gap-4 lg:mt-4 ">
                            <div className="flex w-full lg:w-[192px] flex-col">
                                <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Preço</label>
                                <input type="number" placeholder="R$" className=" placeholder-gray-400 text-xs lg:text-sm w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60" />
                            </div>
                            <div className=" flex w-full lg:w-[138px] flex-col">
                                <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Quantidade</label>
                                <div className="flex w-full placeholder-gray-400 lg:text-sm h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                                    <button onClick={stepDown} className="cursor-pointer h-12 w-full flex justify-center items-center font-extralight">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 lg:w-6 lg:h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </button>

                                    <input id="quantity" className="h-11 w-full text-center text-base font-medium border-none " readOnly value={quantValue} type="number" />

                                    <button onClick={stepUp} className="cursor-pointer h-12 w-full flex justify-center items-center font-extralight">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 lg:w-6 lg:h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full border border-gray-300 border-dashed rounded-xl mix-blend-normal border-opacity-60 cursor-pointer  lg:dark:bg-gray-700 lg:hover:bg-gray-100 lg:dark:border-gray-600 lg:dark:hover:border-gray-500 lg:dark:hover:bg-gray-600">
                            <div className="flex flex-col lg:flex-row items-center text-center lg:text-start justify-center py-4 px-4 lg:px-0 ">
                                <div className="lg:w-[60px] lg:h-[60px] flex content-center">
                                    <Image src={IconUpload} alt="" />
                                </div>
                                <div >
                                    <strong className="lg:mb-2 text-black text-sm lg:text-base">
                                        <span className="hidden lg:block">Arraste o arquivo ou clique aqui para selecionar</span>
                                        <span className="lg:hidden text-center">Clique aqui para fazer o upload <br /> do arquivo</span>
                                    </strong>
                                    <p className="text-[10px] mt-1 lg:mt-0 lg:text-xs lg:leading-[21px] font-normal text-gray-500">PNG, GIF ou JPEG. Tamanho máximo de arquivo 1 Mb.</p>
                                </div>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>

                    <div className="flex mb-4 lg:mb-0 lg:gap-4 w-full lg:border-t lg:pt-4 border-gray-300 mix-blend-normal border-opacity-60">
                        <button type="submit" className="w-full lg:w-[306px] bg-[#F45252] px-6 py-3 rounded-[8px] text-white font-bold text-sm lg:hover:bg-[#dc3434]">Adicionar item</button>
                    </div>

                </form>

            </div>
        </div >

    );

};

export default CreateList;