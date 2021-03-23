import React from 'react'
import { isContactTitleData } from '../../data/TitleData'
import TopVerticalBar from '../../features/post/TopVerticalBar'
import Title from '../../features/title/Title'
import { FooterData } from "../../data/FooterData";
import Footer from "../../features/footer/Footer"
import { Container, Row, Section } from '../../styles/styles';
import ConfigForm from './configForm';
import { BlockContent, BlockLeft, BlockRight } from "./formElement"

export default function ContactPage() {
    return (
        <>
            <Title {...isContactTitleData}/>
            <TopVerticalBar/>
            <Section>
                <Container>
                    <Row>
                    <div className="titleSection">
                        <h2>Vous souhaitez nous contacter ?</h2>
                    </div>
                    <BlockContent>
                        <BlockLeft>
                            <h4>Vous avez des questions, n’hésitez pas à nous envoyer un message</h4>
                            <ConfigForm/>
                        </BlockLeft>
                        <BlockRight>
                            <h4>Contacts</h4>
                        </BlockRight>
                    </BlockContent>
                    
                    </Row>
                </Container>
            </Section>
            
            <Footer footerData = {FooterData}/>
        </>
    )
}
