import React, {useState} from "react";
import {ItemZone, DivImg, DivContentBlock, DivInfoRight, DivTop, TabContent} from "./ViewElement";
import ShoppingCart from "../../../images/shoppingCartWhite.png"
import { selectProduct } from "../../../features/reducers/ProductViewSlice"
import { useSelector, useDispatch } from "react-redux"
import ReactHtmlParser from "react-html-parser"
import { useHistory } from "react-router-dom";
import { addToBasket } from "../../../features/reducers/BasketSlice";

const View = (props) =>{
    const { item } = props;
   const [active, setActive] = useState(0);

   const data = useSelector(selectProduct);

    const dispatch = useDispatch();
    const history = useHistory();
   
   const handleAddToBasket = () =>{
    
    dispatch(addToBasket({
        idCat: item.id,
        nameCat: item.nomPrestation,
        priceCfaProduct: item.prixTTCCFA,
        priceEuroProduct: item.prixTTCEuroEnK
    }))
    history.push('/panier');
}

   const titleTab = ["Présentation de la prestation", "Fiche produit"]

   const handleClick = e => {
       const index = parseInt(e.target.id, 0);
       if(index !== active){
        setActive(index)
       }
   }
   console.log(data)
   //return false
    return(
        <>
            
                <ItemZone className="itemZone">
                                
                <DivTop>
                    <DivImg className="itemImage">
                        <img src={`http://localhost:8000/images/ZERProBestC1SC1Rec.jpg`} alt={item.nomPrestation}/>
                    </DivImg>
                    <DivInfoRight>
                        <div className="title">
                            <h5>{item.name}</h5>
                        </div>
                        <div className="vote">
                            <h1>* * * * *</h1>
                        </div>
                        <div className="price">
                            <h4>{item.prixCFA} F cfa</h4>
                            <h4>{item.prixEuro}</h4>
                        </div>
                        <div className="itemDetails">
                            <table>
                                <tr><td className="label">SKU</td><td>: {item.sku}</td></tr>
                                <tr><td className="label">Catégorie</td><td>: {item.category}</td></tr>
                                <tr><td className="label">Sous Catégorie</td><td>: {item.subcategory}</td></tr>
                            </table>
                        </div>
                        <button onClick={handleAddToBasket}>Ajouter au panier <img src={ShoppingCart} alt="cart"/> </button>
                    </DivInfoRight>
                </DivTop>
                <DivContentBlock className="contentBlock">
                    
                    <div className="itemTabView">
                        <div className="tabTitle">
                                {
                                    titleTab.map((title, index) =>(
                                        <div 
                                    onClick={handleClick} 
                                    className={`item${index} ${active === index ? 'isActive' : ''}`}
                                    active={active === index} 
                                    id={index}
                                >
                                    <h5 
                                    onClick={handleClick} 
                                    active={active === index} 
                                    id={index}
                                    >{title}</h5>
                                </div>
                                    ))
                                }
                                
                        </div>
                        <TabContent active={active === 0} className="tabContent">
                                <table>
                                    <tr><td className="label">Type de Prestation</td><td className="value">{item.type}</td></tr>
                                    <tr><td className="label">Catégorie</td><td className="value">{item.category}</td></tr>
                                    <tr><td className="label">Sous Catégorie</td><td className="value">{item.subcategory}</td></tr>
                                    <tr><td className="label">Nom de la prestation</td><td className="value">{item.name}</td></tr>
                                    <tr><td className="label">Description resumée</td><td className="value">{item.resume}</td></tr>
                                    <tr><td className="label">Description détaillée</td><td className="value">{item.presentation}</td></tr>
                                    <tr><td className="label">Delai d'éxecution estimé en semaine</td><td className="value">{item.delai}</td></tr>
                                    <tr><td className="label">Prix TTC FCFA</td><td className="value">{item.prixCFA}</td></tr>
                                    <tr><td className="label">Prix TTC Euro</td><td className="value">{item.prixEuro}</td></tr>
                                    <tr><td className="label">Taux d'avaance</td><td className="value"></td></tr>
                                </table>
                        </TabContent>
                        <TabContent active={active === 1} className="tabContent">
                            <div className="content">
                            {ReactHtmlParser(item.presentation)}
                            </div>
                        </TabContent>

                    </div>
                </DivContentBlock>
        </ItemZone>
                                
        </>
    )
}

export default View