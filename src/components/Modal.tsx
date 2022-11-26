import React from "react";

function Modal({sModal}: any) {

    return (
        <>
            <div className="lg:hidden justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={() => sModal(false)}
            >
                <div className="relative w-auto my-6 mx-auto max-w-xs max-h-[205px]">
                    <div className=" p-6 gap-4 border-0 rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none">
                        <div className="relative flex gap-2 flex-col text-center">

                            <strong className="text-xl leading-6 font-bold">Atenção!</strong>
                            <span className="text-base leading-6 font-bold">Você tem uma lista não salva!</span>

                        </div>

                        <span className="text-sm leading-6 font-normal">Deseja realmente sair?</span>

                        <button className=" w-[272px] h-[46px] rounded-[8px] bg-red-200 text-white"
                            type="button"
                            onClick={() => sModal(false)}
                        >
                            Sair
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:hidden opacity-70 fixed inset-0 z-40 bg-black"></div>

        </>
    );
}

export default Modal