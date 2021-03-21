import React from 'react';
import Products from './Products';
import { Container, Row, Section } from "../../../styles/styles";
import { PackDiv } from '../PrestationElement'

export default function CataloguesProducts() {
  return (
    <>
    <Section>
        <Container>
            <Row>
              <div className="titleSection">
                <h2>Nos prestations</h2>
              </div>             
            </Row>
        </Container>
        </Section>
        <Products/>
    
    </>
  );
}
