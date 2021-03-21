import React from 'react'
//import { PackDiv, Theader, Tbody, Body, Content } from '../PackPromoElement'

export default function Category(props) {
    const { active, cat, index, handleSelection } = props;

    
        return ( 
                <>
                    <div
                    className={`item${cat.id} ${active === cat.id ? 'isActive' : ' notActive'}`} active={active === cat.id} id={cat.id}
                    key={cat.id}
                    index={cat.id}
                    onClick={handleSelection}
                    >
                    <i><img src={cat.icon}/></i>
                    <h5 active={active === cat.id} id={cat.id}>{cat.name}</h5>
                    </div>
                </>
        )
    
}
