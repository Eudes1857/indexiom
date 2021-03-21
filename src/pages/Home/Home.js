import React from 'react'
import Hero from '../../features/hero/Hero';
import { SliderData } from "../../data/SliderData";

const Home = () =>{

    return (
        <>
            <Hero slides={SliderData} />
        </>
    )
}

export default Home;