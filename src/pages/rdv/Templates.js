import React, { useState } from "react"
import ReactHtmlParser from "react-html-parser"
import styled from "styled-components";
import { Container, Row, Section } from "../../features/post/PostElement";

const TemplateRdv = ({subjection, title}) =>{

    const [checked, setChecked] = useState(false)

    return(
        <Section>
        <Container>
            <Row>
            <h4>{ReactHtmlParser(title)}</h4>
                <Card>
                    {
                        subjection.map((el, index) => (
                            <div key={el.id}>
                                    <label 
                                        htmlFor={el.id}
                                        className={checked === el.id ? "active" : ''}
                                    >
                                        {ReactHtmlParser(el.label)}
                                    </label>
                                    <input
                                        onClick={() => setChecked(el.id)}
                                        type="checkbox" 
                                        id={el.id}
                                        value={el.value}
                                    />
                            </div>
                        ))
                    }
                </Card>
            </Row>
        </Container>
    </Section>
    )

}

export default TemplateRdv;

const Card = styled.div`
    div{
        display: inline-block;
        width: 50%;
        position: relative;
        padding: 15px;
        label{
            width: 100%;
            display: block;
            padding: 10px;
            box-shadow: 2px 2px 3px #ccc;
            text-align: center;
            &.active{
                background: #ef7422;
                color: #fff;
            }
        }
        input{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
    
`;