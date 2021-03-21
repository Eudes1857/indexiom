import React, {useEffect, useState} from "react";
import { Container, Row, Section } from "../../../styles/styles";
import { useParams } from "react-router-dom"
import TopVerticalBar from '../../../features/post/TopVerticalBar';
import { isCatalogueData } from '../../../data/CatalogueData';
import TopMessage from '../TopMessage';
import Title from '../../../features/title/Title';
import { isCatalogueTitle } from '../../../data/TitleData';
import axios from 'axios'
import View from './View'
import { FooterData } from "../../../data/FooterData";
import Footer from "../../../features/footer/Footer"
import RelatedProducts from "./RelatedProducts";

const ProductView = () =>{

    const [ article, getArticle ] = useState('')
    const {id} = useParams();
    const url =`http://localhost:8000/catalogues/categories/subCatgories/products/${id}`;

    useEffect(() => {
        getProductView();
    }, [])
 
    console.log(article)

    const getProductView = () =>{
        axios
        .get(url)
        .then((res) =>{
            const data = res.data
            getArticle(data)
            console.log(data)
        })
        .catch((error) => console.error(`Error:${error}`));
    }

    

    return(
        <>
        <Title {...isCatalogueTitle}/>
        <TopVerticalBar/>
        <TopMessage {...isCatalogueData}/>
            <Section>
                <Container>
                    <Row>
                    <View item={article}/>
                    </Row>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Row>
                    <div className="titleSection">
                        <h2>Nous vous recommandons aussi</h2>
                    </div>
                    <RelatedProducts/>
                    </Row>
                </Container>
            </Section>
            <Footer footerData = {FooterData}/>
        </>
    )
}

export default ProductView