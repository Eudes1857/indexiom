import React from 'react'
import { Container, Row, Section } from "../../../styles/styles";
import Title from '../../../features/title/Title';
import { isCatalogueTitle } from '../../../data/TitleData';
import { FooterData } from "../../../data/FooterData";
import Footer from "../../../features/footer/Footer"
import { Content, BlockLeft, BlockRight } from "./BasketElement"
import { useSelector, useDispatch } from "react-redux"
//import { addToCart, removeFromCart } from "../../../features/actions/cartAction"
import { selectBasketData, removeFromBasket } from "../../../features/reducers/BasketSlice";
import  ReactHtmlParser  from "react-html-parser"
import { useHistory } from "react-router-dom";
//import util from "../../../features/utils/util"


const  Basket = (props) =>{
    const data = useSelector(selectBasketData)

    const history = useHistory();
    const handleReturn = () =>{
        history.push('/catalogue-indexiom')
    }

    const dispatch = useDispatch();    
    const removeProduct = (props) =>{
        const { item } = props;
        dispatch(removeFromBasket({
            id: item.idCat
        }))
        console.log(item.idCat)
    }

    //Faire la somme en F CFA
    const sumFCA = data
    .map(item => item.priceCfaProduct)
    .reduce((prev, curr) => prev + curr, 0);

    //Faire la somme en euro
    const sumEuro = data
    .map(item => item.priceEuroProduct)
    .reduce((prev, curr) => prev + curr, 0);
    
    return (
        <>
        <Title {...isCatalogueTitle}/>
        <Section>
                <Container>
                    <Row>
                    <Content>
                    <BlockLeft>
                    {   data.length === 0 ? (<p>Panier vide </p>) :
                        data.map((item, index) => (
                            
                            <div key={index} id={index} className="flex">
                                <div className="image">
                                    <img src={`http://localhost:8000/images/ZERProBestC1SC1Rec.jpg`} alt=""/>
                                </div>
                                <div className="">
                                    <h5>{ReactHtmlParser(item.nameCat)}</h5>
                                </div>
                                <div className="quantity">
                                    <label>1</label>
                                </div>
                                <div className="price">
                                    <div><strong>{ReactHtmlParser(item.priceCfaProduct)} Fcfa</strong></div>
                                    <div><strong>{ReactHtmlParser(item.priceEuroProduct)} €</strong></div>
                                    <div><button onClick={() => removeProduct(item={item})}>Remove</button></div>
                                </div>
                                
                            </div>
                        ))
                    }
                        </BlockLeft>
                        <BlockRight>
                            <div>
                                <div className="titre">Détails de l'achat</div>
                                <div className="table">
                                    <div className="tr">
                                        <div className="td">Total</div>
                                        <div className="td"> {sumEuro} €</div>
                                    </div>
                                    <div className="tr last">
                                        <div className="td">Total</div>
                                        <div className="td">{sumFCA} Fcfa</div>
                                    </div>
                                    <div className="buttons">
                                            <div className="buy">{data.length > 0 ? <button>Finaliser votre commande</button> : ''}</div>
                                            <div className="market"><button onClick={handleReturn}>Poursuivre vos achats</button></div>
                                    </div>
                                </div>
                            </div>
                         </BlockRight>
                         </Content>
                    </Row>
                </Container>
            </Section>
        <Footer footerData = {FooterData}/>
        </>
    )
}

export default Basket
