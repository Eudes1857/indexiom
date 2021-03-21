import React, { useState , useEffect} from 'react'
import axios from "axios"
import Product from './Product';
import Category from './Category';
//import { act } from 'react-dom/test-utils';
import { Theader } from '../PackPromoElement'

export default function Products(props) {
    const [packs, getPacks] = useState('');
    const [active, setActive] = useState(0);

    const url ="http://localhost:8000/catalogues";

    useEffect(() => {
        getAllPacks();
    }, [url])

    const getAllPacks = () =>{
        axios
        .get(url)
        .then((res) =>{
            const allPacks = res.data[1].packs
            getPacks(allPacks)
            //console.log(allPacks)
        })
        .catch((error) => console.error(`Error:${error}`));
    }


    const handleSelection = e => {
        e.preventDefault();
        const index = parseInt(e.target.getAttribute("id"), 10);
        return setActive(index);
    };

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
        setActive(index);
        }
    };

    const isActive = index => {
        return index === active;
    };

    const renderCategory = (cat, index) =>(
        <Category
        cat={cat}
        key={index}
        index={index}
        handleSelection={handleClick}
        active={active}
        />
    ) 

    const renderProduct = (cat, index) => (<Product index={index} cat={cat} key={index} active={active}/>);

    return (
        <>
        <Theader>
            {
                packs.length > 0 ?
                packs.map(renderCategory)
                : ''
            }
        </Theader>
        <div>
            {
                   packs.length > 0 ?
                   packs.map(renderProduct)
                   :
                   ''
            }
        </div>
        
               

        </>
    )
}
