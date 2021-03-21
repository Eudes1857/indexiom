import React from 'react'
import Title from '../../features/title/Title'
import {  isMethodeTitle } from '../../data/TitleData'
import { isMethodeContent } from '../../data/ContentData'
import { isOurProcess } from "../../data/ProcessData";
import { FooterData } from "../../data/FooterData";
import Post from '../../features/post/Post'
import OurProcess from '../../features/post/OurProcess'
import Footer from "../../features/footer/Footer"
import TopVerticalBar from '../../features/post/TopVerticalBar';



const MethodePage = () =>{

    return(
        <>
            <Title {...isMethodeTitle}/>
            <TopVerticalBar/>
            <Post {...isMethodeContent}/>
            <OurProcess {...isOurProcess}/>
            <Footer footerData = {FooterData}/>
        </>
    )
}

export default MethodePage;