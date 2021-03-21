import React from 'react'
import { Link } from 'react-router-dom';
import { Member, BodyCard, CardM, Message } from "./equipElement"
import { Container, Row, Section } from '../../styles/styles'

function Card({equipes, message}) {
    
    return (
        <>
            <Section className="messageEquip">
                <Container>
                    <Row>
                    <Message>
                        <div>
                            <p>{message}</p>
                        </div>
                    </Message>
                    </Row>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Row>
            <BodyCard>
            {equipes.map((item, index) => (
                <Member className={`membre${index}`} key={index}>
                <CardM bg={item.photo} className="card">
                
                <div className="context">
                    <h5>{item.name}</h5>
                    <h5 className="poste">{item.poste}</h5>
                    <ul className="socialNet">
                        {item.socialnetwork.map((net, index) =>(
                            <li key={index}>
                                <Link to={net.link}>
                                    <img src={net.icon} width="24"/>
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div> 
                </CardM>
                </Member>
                ))

                }
            </BodyCard>
            </Row>
            </Container>
            </Section>
        </>
    )
}

export default Card
