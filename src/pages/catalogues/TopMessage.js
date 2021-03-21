import React from 'react';
import ReactHtmlParser from 'react-html-parser'

import { Row } from '../../features/post/PostElement';
import { Container } from '../../styles/styles';

const TopMessage = ({ topMessage }) =>{

    return(
        <>
        <section>
            <Container>
                <Row>
                    {ReactHtmlParser(topMessage)}
                </Row>
            </Container>
        </section>
        </>
    )
}

export default TopMessage;