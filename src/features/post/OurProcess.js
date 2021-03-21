import React, { useState } from 'react'
import { Container, Row } from './PostElement';
import ReactHtmlParser from "react-html-parser";
import {RowBottom, Column, ImageBlock, TextBlock, SectionBottom, Counter, SectionTitle } from "./ProcessElement"

const OurProcess = ({header, context}) =>{

    return(
        <>
          <SectionTitle>
          <h2>{header}</h2>
          </SectionTitle>
           <SectionBottom>
            <Container>
                    <RowBottom>
                        {
                            context.map((item, index) => (
                                <Column key={index}>
                                    <ImageBlock>
                                        <div><img src={item.image}></img></div>
                                        <Counter className="counter"><span>{`0${1+index}`}</span></Counter>
                                    </ImageBlock>
                                    <TextBlock className="textBlock">
                                        <div>
                                        <h5>{ReactHtmlParser(item.title)}</h5>
                                        {ReactHtmlParser(item.content)}
                                        </div> 
                                    </TextBlock>
                                </Column>
                            ))
                        }
                    </RowBottom>
                </Container>
           </SectionBottom>

        </>
    )
}

export default OurProcess