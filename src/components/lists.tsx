import Image from "next/image";
import PaperImg from '../assets/PaperList.svg'
import IconList from '../assets/Icon.svg'

import { useEffect, useState } from "react";

interface Item {
    products: object | any;
    id: string;
}

export default function Lists() {

    const [dataList, setDataList] = useState([]);
    const getList = async () => {
        const response = await fetch('/api/list');
        const values = await response.json();
        setDataList(values)
        //setContCategorys(products)
    }

    useEffect(() => {

        getList();

    },[])

    return (
        <>
            {
                dataList.map((item: Item) => (

                    <div key={item.id} className="flex items-center gap-1 md:gap-2 lg:gap-3">

                        <div className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 flex justify-center bg-gray-400 rounded-lg bg-opacity-70">
                            <Image src={PaperImg} alt="" />
                        </div>

                        <div className='flex flex-col'>
                            <strong className='text-black text-sm '>
                                <span>Lista {item.id}</span>
                            </strong>
                            <div className='text-gray-500 text-xs '>
                                <span className=' text-gray-500 text-xs '>
                                    {Object.keys(item.products.reduce((acc: any, product: { categoryTitle: string; }) => ({
                                        ...acc,
                                        [product.categoryTitle]: true
                                    }), {})).length}
                                </span> categorias /

                                <span className='text-gray-500 text-xs '>
                                    {item.products.length}
                                </span> itens
                            </div>
                        </div>
                        <div className="ml-10 md:ml-11 lg:ml-12">
                            <Image src={IconList} alt="" />
                        </div>

                    </div>

                ))}

        </>
    );
}