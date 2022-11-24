import Image from "next/image";
import MilhoImg from '../assets/Milho.png'
import closeIconImg from '../assets/closeIconRed.svg'

export function SaveList() {
    return (

        <div className='flex items-center gap-3' >
            <div className="w-full flex gap-2 justify-start  items-center">
                <div className="left-0 w-8 h-8 flex justify-center">
                    <Image src={MilhoImg} alt="" />
                </div>

                <strong className='text-black text-sm '>
                    <span>Milho verde</span>
                </strong>
            </div>
            <div className="w-full flex gap-4 justify-end  items-center">
                <div className='text-gray-500 text-xs'>
                    <span className=' text-gray-500 text-xs '>R$ </span> 0,00 /
                    <span className='text-gray-500 text-xs '> Un</span>
                </div>
                <div className="w-[13px] h-full flex justify-center items-center">
                    <Image src={closeIconImg} alt="" />
                </div>
            </div>

        </div>
    );
}