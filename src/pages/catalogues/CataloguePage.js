import React from 'react';
import PackPromo from './packPromo';
import Title from '../../features/title/Title';
import { isCatalogueTitle } from '../../data/TitleData';
import TopVerticalBar from '../../features/post/TopVerticalBar';
import { isCatalogueData } from '../../data/CatalogueData';
import TopMessage from './TopMessage';
import CataloguesProducts from './prestation';
import { FooterData } from "../../data/FooterData";
import Footer from "../../features/footer/Footer"

export default function CataloguePage() {
  return (
    <>
    <Title {...isCatalogueTitle}/>
    <TopVerticalBar/>
    <TopMessage {...isCatalogueData}/>
    <CataloguesProducts/>
    <PackPromo/>
    <Footer footerData = {FooterData}/>
    </>
  );
}
