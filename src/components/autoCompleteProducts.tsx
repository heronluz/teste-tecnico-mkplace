import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';

export default function AutoCompleteProducts() {

    const [dataProducts, setDataProducts] = useState([{ name: String }]);
    const getProducts = async () => {
        const response = await fetch('/api/product');
        const values = await response.json();
        setDataProducts(values)
    }

    useEffect(() => {

        getProducts();

    }, [])

    return (

        <div className="flex flex-col w-full">
            <label className="text-xs mb-[6px] font-medium lg:font-semibold lg:leading-[18px]">Nome do produto</label>

            <Autocomplete
                id="autoComplete"
                freeSolo
                className="placeholder-gray-400 text-xs lg:text-sm w-full h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60"
                options={dataProducts.map((option) => option.name)}
                renderInput={(params) => <TextField {...params} label="" />}
            />

            {/* <input type="text" placeholder="e.g Milho verde em conserva" className=" placeholder-gray-400 text-xs lg:text-sm w-full px-5 h-12 border rounded-[8px] border-gray-300 mix-blend-normal border-opacity-60" /> */}
        </div>
    );
}