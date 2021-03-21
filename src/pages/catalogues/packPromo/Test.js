import React, {useEffect, useState} from 'react';
import ReactHtmlParser from "react-html-parser"
import { Table, Td, TdLeft, TdRight} from "../PackPromoElement"

export default function Product(props) {
    const { packs } = props;

    
        return (
            <>
                {
                    packs.map((cat, index) => (
                        <>
                            {cat.products.map(item =>(
                  <>
                                              <Table>
                                <TdLeft>Description :</TdLeft>
                                <TdRight>{ReactHtmlParser(item.description)}</TdRight>
                            </Table>
                            <Table>
                                <TdLeft>Prestations : <br/>Contenues</TdLeft>
                                <TdRight>{ReactHtmlParser(item.contentPrestation)}</TdRight>
                            </Table>
                            <Table>
                                <TdLeft>Délai en semaines : </TdLeft>
                                <TdRight>{item.leadTime}</TdRight>
                            </Table>
                            <Table>
                                <TdLeft>Prix TTC FCFA</TdLeft>
                                <TdRight>{item.cfa}</TdRight>
                            </Table>
                            <Table>
                                <TdLeft>Prix TTC Euros</TdLeft>
                                <TdRight>{item.euro}</TdRight>
                            </Table>

                  </>
                ))}
                        </>
                    ))
                }
            </>
          );
  
}
