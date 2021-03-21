import React from 'react';
import Products from './Products';
import { Container, Row, Section } from "../../../styles/styles";
import { PackDiv } from '../PackPromoElement'

export default function PackPromo() {
  return (
    <>
    <Section>
        <Container>
            <Row>
              <div className="titleSection">
                <h2>Nos packs promotionnels</h2>
              </div>
              <PackDiv>
                <Products/>
              </PackDiv>
            </Row>
        </Container>
        </Section>
    
    </>
  );
}
