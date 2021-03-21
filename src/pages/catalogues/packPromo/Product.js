import React from 'react'
import ReactHtmlParser from "react-html-parser"
import {Table, TdLeft, TdRight, Tbody, Content, Td, ButtonCart } from '../PackPromoElement'
import ShoppingCartOrange from "../../../images/shoppingCartOrange.png"
import { useDispatch } from "react-redux"
import { addToBasket } from "../../../features/reducers/BasketSlice";
import { useHistory } from "react-router-dom";
 
 
const  Product = (props) => {
    const { active, cat, index, handleSelection } = props;

    const dispatch = useDispatch();
    const history = useHistory();

    const handleAddToBasket = () =>{
        dispatch(addToBasket({
            idCat: cat.id,
            nameCat: cat.name,
            priceCfaProduct: cat.products[0].priceCfa,
            priceEuroProduct: cat.products[0].priceEuro
        }))
        //history.push('/panier');
    }   
     
        return (
                <>
                    {
                        cat.products.map(item => (
                            <>
                            <Tbody active={active === index}>
                                <Content>
                                <Table>
                                    <Td>
                                        <TdLeft><h6>Description :</h6></TdLeft>
                                        <TdRight>{ReactHtmlParser(item.description)}</TdRight>
                                    </Td>
                                </Table>
                                <Table>
                                    <Td>
                                        <TdLeft><h6>Prestations : <br/>Contenues</h6></TdLeft>
                                        <TdRight>{ReactHtmlParser(item.contentPrestation)}</TdRight>
                                    </Td>
                                </Table>
                                <Table>
                                    <Td>
                                        <TdLeft><h6>Délai en semaines :</h6> </TdLeft>
                                        <TdRight>{item.leadTime}</TdRight>
                                    </Td>
                                </Table>
                                <Table>
                                    <Td>
                                        <TdLeft><h6>Prix TTC FCFA</h6></TdLeft>
                                        <TdRight>{ReactHtmlParser(item.priceCfa)}</TdRight>
                                    </Td>
                                </Table>
                                <Table>
                                    <Td className="priceBottom">
                                        <TdLeft><h6>Prix TTC Euros</h6></TdLeft>
                                        <TdRight>{ReactHtmlParser(item.priceEuro)}</TdRight>
                                    </Td>
                                </Table>
                                <ButtonCart>
                                    <button onClick={handleAddToBasket} className="shoppingButton">
                                        Ajouter au panier <i><img src={ShoppingCartOrange} /></i> 
                                    </button>
                                </ButtonCart>
                                </Content>
                            </Tbody>
                         </>
                        ))
                    }
                    
                </>
        )
    
}

export default Product;
