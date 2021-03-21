import React from 'react'
import Section from '../section/Section'
import {
    TitleBlock,
    TitleContainer,
    TitleHead,
    TitleName,
    TitleOverlay,
    TitleContent,
    TitleButton
} from "./TitleElement"
import Button from '../button/Button'
const Title = ({ id, heading, title, background, button}) =>{

    return(
        <>
            <TitleBlock img={background}>
                <TitleOverlay>
                    <TitleContainer>
                        <TitleContent>
                            <TitleHead>
                                <h4>{heading}</h4>
                            </TitleHead>
                            <TitleName>
                                <h2>{title}</h2>
                            </TitleName>
                            <TitleButton>
                                <Button className="firstButton" to="/rdv" primary={true}>
                                    {button.b1.name}
                                </Button>
                                <Button className="secondButton" primary={true}>
                                    {button.b2.name}
                                </Button>
                            </TitleButton>
                        </TitleContent>
                    </TitleContainer>
                </TitleOverlay>
            </TitleBlock>
        </>
    )
}

export default Title;