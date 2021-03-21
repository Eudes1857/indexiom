import React, {useState} from 'react'
import ReactHtmlParser from "react-html-parser"
import {Table, TdLeft, TdRight, Tbody, Content, Td, ButtonCart } from '../PrestationElement'
import ShoppingCartOrange from "../../../images/shoppingCartBlack.png"
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { addToBasket } from "../../../features/reducers/BasketSlice";
import { addToProductView } from "../../../features/reducers/ProductViewSlice";
import { useHistory } from "react-router-dom";

export default function Category(props) {
    const { subActive, cat, active } = props;

    const [tabview, setTabview] = useState(false);

    const dispatch = useDispatch();
    //const history = useHistory();

    const handleAddToBasket = (props) =>{
        const { item } = props;
        dispatch(addToBasket({
            idCat: item.id,
            nameCat: item.nomPrestation,
            priceCfaProduct: item.prixTTCCFA,
            priceEuroProduct: item.prixTTCEuroEnK
        }))
        //history.push('/panier');
    }   

    const handleViewProduct = (props) =>{
        const {item} = props;
        dispatch(addToProductView({
            id: item.id,
            name: item.nomPrestation,
            type: item.type,
            image: item.image,
            sku: item.sku,
            category: item.categorie,
            subcategory: item.souscategorie,
            presentation: item.presentation,
            delai: item.delai,
            resume: item.resumeDetaille,
            prixCFA: item.prixTTCCFA,
            prixEuro: item.prixTTCEuroEnK
        }))
    }

        return (
                <> 
                    <div className={``}>
                        {
                        cat.subCategories.map(subCat => (
                            <>
                            <Tbody active={active === cat.id} subActive={subActive === subCat.id} id={subCat.id}>
                            {
                                subCat.products.map((item, index) => (
                                    
                                <Content>
                                <div className={`presTabs ${tabview === index ? 'opened' : 'closed'}`} onClick={() =>setTabview(index)} key={index}>
                                <h5 onClick={() =>handleViewProduct(item={item})}>
                                    <Link to={tabview === index ? `catalogue-indexiom/${item.id}` : '#'}>
                                        {item.nomPrestation}
                                    </Link>
                                </h5>
                                    {
                                        tabview === index ? 
                                        (
                                            <>
                                                <Table>
                                    <Td className="td">
                                        <TdLeft><h6>Présentation de : <br/>la prestation</h6></TdLeft>
                                        <TdRight>{ReactHtmlParser(item.presentation)}</TdRight>
                                    </Td>
                                </Table>
                                
                                <Table>
                                    <Td>
                                        <TdLeft><h6>Fiche du produit :</h6> </TdLeft>
                                        <TdRight>
                                            <table>
                                                <tr>
                                                    <td>SKU</td>
                                                    <td>: {item.sku}</td>
                                                </tr>
                                                <tr>
                                                    <td>Type de Prestation</td>
                                                    <td>: {item.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Catégorie</td>
                                                    <td>: {item.categorie}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sous Catégorie</td>
                                                    <td>: {item.souscategorie}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nature du livrable</td>
                                                    <td>: {item.nomPrestation}</td>
                                                </tr>
                                                <tr>
                                                    <td>Délai d'éxecution estimé (en semaine)</td>
                                                    <td>: {item.delai}</td>
                                                </tr>
                                                <tr>
                                                    <td>Prix TTC CFA</td>
                                                    <td>: {item.prixTTCCFA}</td>
                                                </tr>
                                                <tr>
                                                    <td>Prix TTC Euros</td>
                                                    <td>: {item.prixTTCEuroEnK}</td>
                                                </tr>
                                            </table>
                                        </TdRight>
                                    </Td>
                                    
                                </Table>
                               
                               <ButtonCart className="button">
                                    <button onClick={() => handleAddToBasket(item={item})} className="shoppingButton">
                                        Ajouter au panier <i><img src={ShoppingCartOrange} /></i> 
                                    </button>
                               </ButtonCart>

                                </>
                                        )
                                        :
                                        ''
                                    }
                                </div>
                                </Content>
                            
                                ))
                            
                            }
                            </Tbody>
                         </>
                        ))
                    }
                    </div>
                    
                </>
        )
    
}
