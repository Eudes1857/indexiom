import React from 'react'
import { PackDiv, Theader, Tbody, Body, Content } from '../PackPromoElement'

export default function Category(props) {
    const { active, cat, index, handleSelection } = props;

    
        return (
                <>
                    <div
                    className={`item${index} ${active === index ? 'isActive' : ' notActive'}`} active={active === index} id={index}
                    key={index}
                    index={index}
                    onClick={handleSelection}
                    >
                    <h5 active={active === index} id={index}>{cat.name}</h5>
                    
                    </div>
                </>
        )
    
}
