import { useEffect, useState } from "react";


interface Item {
    id: string;
    title: string;
}

export default function SelectSubCategory(sCategory: any) {

    const [dataSubCategory, setDataSubCategory] = useState([]);
    const getSubCategory = async () => {
        const response = await fetch('/api/subcategory');
        const values = await response.json();

        setDataSubCategory(values.filter((subCat: { categoryId: any; }) => {
            return subCat.categoryId === parseInt(sCategory.sCategory);
        }))

    }

    useEffect(() => {

        getSubCategory();

    }, [sCategory])


    return (
        <>
            <div className="flex flex-col w-full">
                <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Selecione uma subcategoria do produto</label>
                <select defaultValue="" className="appearance-none text-xs lg:text-sm text-gray-400 bg-arrowDown bg-no-repeat bg-origin-content bg-right w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60">
                    <option hidden >Pesquise por uma subcategoria. Ex. Conservantes</option>
                    {dataSubCategory.map((item: Item) => (
                        <option key={item.id} value={item.id}>{item.title}</option>
                    ))}
                </select>
            </div>
        </>
    );

}