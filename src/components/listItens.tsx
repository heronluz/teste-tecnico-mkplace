import Image from "next/image";
import { Key } from "react";


export function ListItens() {

    function renderItens(i: Key | null | undefined) {
        return (

            <div key={i} className="w-full flex lg:gap-4">
                <div className="w-[40%] lg:w-full flex justify-start items-center gap-3 lg:gap-4">
                    <input type="checkbox" className="w-6 h-6 rounded-md border border-black accent-gray-300/70" />
                    <label className="text-sm font-bold">Milho verde</label>
                </div>
                <div className="w-[60%] lg:w-full flex justify-end items-center gap-1 text-gray-500 text-xs font-medium">
                    <span className="text-xs font-medium ">R$</span>0,00 / Un

                    <div className="flex text-sm h-6 ml-2 lg:ml-4">
                        <button className="cursor-pointer h-6 w-6 rounded-3xl flex justify-center items-center font-extralight bg-[#E6E6E6]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>
                        <input pattern="[0-9]+([,\.][0-9]+)?" id="quantity" className="h-full text-black w-8 text-center text-base font-semibold border-none " readOnly value={1} type="number" />
                        <button className="cursor-pointer h-6 w-6 rounded-3xl flex justify-center items-center font-extralight bg-[#E6E6E6]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

        );
    }

    let listItens = []
    for (let i = 0; i < 3; i++) {
        listItens.push(i)
    }
    return (
        <>
            <label className="text-xs leading-[14px]">Enlatados</label>
            <div className="w-full flex flex-col gap-2">
                {listItens.map(renderItens)}
            </div>
        </>
    );
}