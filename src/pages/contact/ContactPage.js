import React from 'react'
import { isContactTitleData } from '../../data/TitleData'
import TopVerticalBar from '../../features/post/TopVerticalBar'
import Title from '../../features/title/Title'
import { FooterData } from "../../data/FooterData";
import Footer from "../../features/footer/Footer"

export default function ContactPage() {
    return (
        <>
            <Title {...isContactTitleData}/>
            <TopVerticalBar/>
            
            <Footer footerData = {FooterData}/>
        </>
    )
}
