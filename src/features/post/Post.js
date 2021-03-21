import React, { useEffect, useState } from 'react'
import ReactHtmlParser from "react-html-parser";
import Button from '../button/Button';
import {
    Section,
    Row,
    Article,
    Container,
    MethodItem,
    BarTop
} from './PostElement'

const Post = ({slogan, marketingAgency, paradoxe, ourMethod}) =>{

    const [tabview, setTabview] = useState(false);

    const handleClick = () =>{
        setTabview(current => !current)
    }

    useEffect(() =>{
        console.log(tabview)
    }, [tabview])

    const toggle = () =>{
        setTabview(tabview === false ? true : false)
    }

    return(
        <>
            <Section>
                <Container>
                    <Row>
                        <Article>
                        <h4>{ReactHtmlParser(slogan)}</h4>
                        <div className="marketingDiv">
                            <h4>{ReactHtmlParser(marketingAgency.header)}</h4>
                            {ReactHtmlParser(marketingAgency.content)}
                        </div>
                        <div className="paradoxDiv">
                        <div className="titleSection"><h2>{ReactHtmlParser(paradoxe.header)}</h2></div>
                            <div className="tabviewBlock">
                                {
                                    paradoxe.context.map((tab, index) => (
                                        <>
                                            <div tabview={tabview} className={`tabPack ${tabview === index ? 'opened' : 'closed'}`} onClick={() =>setTabview(index)} key={index}>
                                                <h5>{ReactHtmlParser(tab.title)}</h5>
                                                {
                                                    tabview === index ? (
                                                        <div className="tabText">
                                                    {ReactHtmlParser(tab.content)}
                                                </div>
                                                    ) : ''
                                                }
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <MethodItem>
                            <div className="titleSection"><h2>{ReactHtmlParser(ourMethod.header)}</h2></div>
                            <div className="blockItems">
                                {
                                    ourMethod.context.map((item, index) =>(
                                        <>
                                        <div key={index} className="rowItem">
                                            <div className="imgBlock">
                                                <div><img src={item.image}></img></div>
                                            </div>
                                            <div className="contentBlock">
                                                {ReactHtmlParser(item.title)}
                                                {ReactHtmlParser(item.content)}
                                                {
                                                    item.buttonText ? 
                                                    (
                                                        <div className="readMore">
                                                            <img src={item.buttonText}/>
                                                        </div>
                                                    ) : ''
                                                
                                                }
                                                
                                            </div>
                                        </div>
                                        </>
                                    ))
                                }
                            </div>
                        </MethodItem>
                        </Article>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default Post;