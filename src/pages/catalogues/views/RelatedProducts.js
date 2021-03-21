import React, { useState , useEffect} from 'react'
import axios from "axios"
import ReactHtmlParser from "react-html-parser"
import {RelatedBlock} from "../PrestationElement"

export default function RelatedProducts() {
    const [catalogues, getCatalogues] = useState('');
    const url ="http://localhost:8000/catalogues";

    useEffect(() => {
        getAllPacks();
    }, [url])

    const getAllPacks = () =>{
        axios
        .get(url)
        .then((res) =>{
            const allCatalogues = res.data[0].categories
            getCatalogues(allCatalogues)
            console.log(allCatalogues)
        })
        .catch((error) => console.error(`Error:${error}`));
    }

    return (
        <div>
            {
                catalogues.length > 0 ?
                catalogues.map((cata, index) => (
                    <>
                        <RelatedBlock key={index} className={cata.id === 1 ? 'active' : 'notActive'}>
                            {
                                cata.subCategories.map((subCat, index) =>(
                                    <>
                                    {                                       
                                            subCat.products.slice(3).map((p, index) =>(
                                                <>
                                                    <div key={index} className="product">
                                                        <div className="image">
                                                            <img src={p.image}/>
                                                        </div>
                                                        <div className="contenu">
                                                            <h6>{ReactHtmlParser(p.nomPrestation)}</h6>
                                                            <strong>
                                                                {ReactHtmlParser(p.prixTTCCFA)} Fcfa<br/>
                                                                {ReactHtmlParser(p.prixTTCEuroEnK)} €
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        
                                        
                                    }
                                   </>
                                ))
                                
                            }
                         </RelatedBlock>
                    </>
                ))
                :
                ''
            }
        </div>
    )
}
