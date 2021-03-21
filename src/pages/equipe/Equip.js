import React from 'react'
import { isEquipeData } from '../../data/EquipeData'
import { isEquipTitleData } from '../../data/TitleData'
import TopVerticalBar from '../../features/post/TopVerticalBar'
import Title from '../../features/title/Title'
import Card from './Card'
import { FooterData } from "../../data/FooterData";
import Footer from "../../features/footer/Footer"

export default function Equip() {
    return (
        <>
            <Title {...isEquipTitleData}/>
            <TopVerticalBar/>
            <Card {...isEquipeData}/>
            <Footer footerData = {FooterData}/>
        </>
    )
}
