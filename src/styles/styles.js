import styled from "styled-components";
import Underline from "../images/underline.png"
import izeroBlack from "../images/izeroBlack.png"
import izeroOrange from "../images/izeroOrange.png"
import istudioBlack from "../images/istudioBlack.png"
import istudioOrange from "../images/istudioOrange.png"
import icommandoBlack from "../images/icommandoBlack.png"
import icommandoOrange from "../images/icommandoOrange.png"


export const Container = styled.div`
    color: #2b2b2b;
    width: calc(100% - 4rem);
    margin: 0 auto;
    @media screen and(max-width: 1280px){
        width: calc(100% - 19rem);
    }
    @media screen and (max-width: 1920px){
        width: calc(100% - 19rem);
    }
    h5{
        font-size: 18px;
    }

    p{
        margin: 16px 0;
        line-height: 26px;
    }
    li{
        line-height: 26px;
    }

    h4, h2{
        text-align: center;
    }
    h4{
        font-size: 24px;
        &.subh{
            color: #ef7422;
        }
    } 
    .titleSection{
        text-align: center;
    }
    h2{
        font-size: 36px;
        text-align: center;
        color: #ef7422;
        font-family: GD sage !important;
        display: inline-block;
        background: url(${Underline}) bottom left no-repeat ;
    }

    h6{
        &.subh{
            text-align: center;
            font-weight: normal;
        }
    }
`;

export const Section = styled.section`
    padding: 50px 0;

    &.messageEquip{
        padding: 0 0 50px 0;
    }
`
export const Row = styled.div`

    .catalogCat{
        display: flex;
        div{
            width: 33.33333%;
            text-align: center;
            padding: 20px 0;
            h5{
                padding-top: 30px;
            }

            &.notActive{
                &.item1{
                    background: url(${izeroBlack}) center 15px no-repeat;
                }
                &.item25{
                    background: url(${istudioBlack}) center 15px no-repeat;
                }
                &.item50{
                    background: url(${icommandoBlack}) center 15px no-repeat;
                }
            }
            &.isActive{
                &.item1{
                    background: url(${izeroOrange}) #fff center 15px no-repeat;
                }
                &.item25{
                    background: url(${istudioOrange}) #fff center 15px no-repeat;
                }
                &.item50{
                    background: url(${icommandoOrange}) #fff center 15px no-repeat;
                }

                h5{
                    color: #ef7422;
                }
            }
        }
    }

`;

export const SectionOverlay = styled.div`
    background-color: ${(props) => props.bgcolor};
    
`;