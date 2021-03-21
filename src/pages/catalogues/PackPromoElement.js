import styled from "styled-components";
import Puce from "../../images/puce.png"
import isecure from "../../images/isecure.png"
import isecureWhite from "../../images/isecure-white.png"
import iappmobile from "../../images/iappmobile.png"
import iappmobileWhite from "../../images/iappmobile-white.png";

export const PackDiv = styled.div`
    margin: 50px 0;
`;

export const Theader = styled.div`
    display: flex;
    div{
        width: 33.3333%;
        text-align: center;
        padding: 20px;
        cursor: pointer;
        //background: ${props =>props.active === props.index ? "#2b2b2b" : "#e5e5e5"};
        background-color: #e5e5e5 !important;

        h5{
            padding-top: 40px;
        }
        &.notActive{
            &.item0{
                background: url(${iappmobile}) center 15px no-repeat;
            }
            &.item1{
                background: url(${isecure}) center 15px no-repeat;
            }
            &.item2{
                background: url(${iappmobile}) center 15px no-repeat;
            }
            &.item3{
                background: url(${isecure}) center 15px no-repeat;
            }
        }
        &.isActive{
            background-color: #2b2b2b !important;
            color: #fff;
            &.item0{
                background: url(${iappmobileWhite}) center 15px no-repeat;
            }
            &.item1{
                background: url(${isecureWhite}) center 15px no-repeat;
            }
            &.item2{
                background: url(${iappmobileWhite}) center 15px no-repeat;
            }
            &.item3{
                background: url(${isecureWhite}) center 15px no-repeat;
            }
        }


        &.item1{
            margin: 0 0 0 5px;
        }
        &.item2{
            margin: 0 5px;
        }
        
    }
`;
export const Tbody = styled.div`
    ${props => (props.active ? "" : "display:none")};
    border: 2px solid #2b2b2b;
    padding: 20px;
    margin-top: 5px;
`;

export const Body = styled.div`
`;

export const Content = styled.div`
  
  
`;

export const Table = styled.div``;

export const TdLeft = styled.div`
    width: 30%;
    text-align: right;
    padding-right: 80px;

    h6{
        //margin: 16px 0;
        font-size: 16px;
    }
`;

export const TdRight = styled.div`
    width: 70%;
`;

export const Td = styled.div`
    display: flex;

    padding: 30px 10px;
    border-bottom: 1px solid #2b2b2b;
    &.priceBottom{
        border: 0;
        padding-bottom: 50px;
    }
    div{
        display: flex;
        ul{
            padding: 0 20px;
            list-style: none;
            //background: url(${Puce}) left 5px no-repeat;
            position: relative;

            &:before{
                content: url(${Puce});
                position: absolute;
                left: 0;
            }
            
            li{
                ul{
                    margin-top: 50px;
                    padding: 0 !important;
                    &:before{
                        left: -20px;
                    }
                }
            }
        }
    }
    
    
`;

export const ButtonCart = styled.div`
    text-align: center;
    .shoppingButton{
        background: none;
        border: 1px solid #222;
        min-width: 260px;
        margin: 0 auto;
        padding: 5px;
        color: #ef7422;
        font-weight: 600;
        margin-bottom: 30px;
    }
`;