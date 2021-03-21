import React from 'react'
import { TsubHeader } from '../PrestationElement'

export default function SubCategory(props) {
    const { active, subCat, index, handleSelection, subActive } = props;
     
    
    
        return (
                <>
                <TsubHeader
                    active={active === subCat.id}
                    className={`item${subCat.id} ${active === subCat.id ? 'isActive' : ' notActive'} ${subCat.subCategories.length === 2 ? 'twoColumns': ''}`} active={active === subCat.id} id={subCat.id}
                >
                    {
                     //subCat.id === 1 ?
                     subCat.subCategories.map((cat, index) => (
                        
                        <div
                        className={`item${index} subCat${cat.id} ${subActive === cat.id ? 'isActive' : ' notActive'}`} subActive={subActive === cat.id} id={cat.id}
                        //key={index}
                        index={cat.id}
                        onClick={handleSelection}
                        >
                        <h5 active={subActive === cat.id} id={cat.id}>{cat.name}</h5>
                        
                        </div>
                        
                    )) 
                    
                    
                    }
                    </TsubHeader>
                    
                    
                </>
        )
    
}
