import { useEffect, useState } from "react";


interface Item {
    id: string;
    title: string;
}

export default function SelectCategory({sCategory}: any) {

    const [dataCategory, setDataCategory] = useState([]);
    const getCategory = async () => {
        const response = await fetch('/api/category');
        const values = await response.json();
        setDataCategory(values)
    }

    useEffect(() => {

        getCategory();

    }, [])

    return (
        <>
            <div className="flex flex-col w-full">
                <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Selecione a categoria do produto</label>
                <select defaultValue="" onChange={(event) => sCategory(event.target.value)} className="appearance-none text-xs lg:text-sm text-gray-400 bg-arrowDown bg-no-repeat bg-origin-content bg-right w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                    <option hidden >Pesquise por uma categoria. Ex. Enlatados</option>
                    {dataCategory.map((item: Item) => (
                        <option key={item.id} value={item.id}>{item.title}</option>
                    ))}
                </select>
            </div>

        </>
    );

}