import styled from "styled-components";
import Puce from "../../images/puce.png";
import idecollage from "../../images/idecollage.png"
import idecollageWhite from "../../images/idecollage-white.png"
import iappmobile from "../../images/iappmobile.png"
import iappmobileWhite from "../../images/iappmobile-white.png";
import imarketBlack from "../../images/imarketBlack.png"
import imarketBlackWhite from "../../images/imarketWhite.png"
import isecure from "../../images/isecure.png"
import isecureWhite from "../../images/isecure-white.png"



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
        background: #fdf1e8;

        
        &.isActive{
            background: #ef7422;
            color: #fff;
        }

        &.item1, &.item25, &.item50{
            margin: 0 0 0 5px;
        }
                
    }
    

    h5{
        text-transform: uppercase;
    }
`;
export const TsubHeader = styled.div`
${props => (props.active ? "display: flex" : "display:none")};
//display: flex;
div{
    width: 33.3333%;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    //background: ${props =>props.active === props.index ? "#2b2b2b" : "#e5e5e5"};
    background-color: #fdf1e8 !important;

    h5{
        padding-top: 40px;
    }
    &.notActive{
        &.subCat3{
            background: url(${idecollage}) center 15px no-repeat;
        }
        &.subCat7{
            background: url(${iappmobile}) center 15px no-repeat;
        }
        &.subCat15{
            background: url(${imarketBlack}) center 15px no-repeat;
        }
        &.subCat22{
            background: url(${isecure}) center 15px no-repeat;
        }
    }
    &.isActive{
        background-color: #ef7422 !important;
        color: #fff;
        &.subCat3{
            background: url(${idecollageWhite}) center 15px no-repeat;
        }
        &.subCat7{
            background: url(${iappmobileWhite}) center 15px no-repeat;
        }
        &.subCat15{
            background: url(${imarketBlackWhite}) center 15px no-repeat;
        }
        &.subCat22{
            background: url(${isecureWhite}) center 15px no-repeat;
        }
    }

    &.item1, &.item2, &.item3, &.item4, &.item5{
        margin: 0 0 0 5px;
    }
       
    
}

&.twoColumns{
    div{
        width: 50% !important;
    }
}

h5{
    text-transform: uppercase;
}

`;
export const Tbody = styled.div`
${props => (props.subActive && props.active ? "" : "display:none")};
    .presTabs{
        border: 2px solid #ef7422;
        padding: 20px;
        margin-top: 5px;

        h5{
            text-align: center;
            a{
                color: #fff;
                text-decoration: none;
            }
        }

        &.closed{    
            background: #ef7422;
            h5{
                color: #fff;
            }
        }
        &.opened{
            h5{
                a{color: #ef7422;}
                //border-bottom: 1px solid #2b2b2b;
                padding: 20px;
            }
        }
    }
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
        margin: 16px 0;
        font-size: 16px;
    }
`;

export const TdRight = styled.div`
    width: 70%;
`;

export const Td = styled.div`
    display: flex;

    padding: 30px 10px;
    border-top: 1px solid #2b2b2b;

    ul{
        list-style: none;
    }
                
    .ulElement{
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
    
    &:last-child{
        //border: 0;
        margin-bottom: 50px;
    }

    table{
        td{
            padding: 10px;
        }
    }
`;

export const ButtonCart = styled.div`
    text-align: center;
    button{
        &.shoppingButton{
            min-width: 260px;
            margin: 30px auto;
            padding: 5px;
            color: #2b2b2b;
            font-weight: 600;
            border: 1px solid #ef7422;
            background: none;
            
        }
    }
`;

export const RelatedBlock = styled.div`
    padding: 50px 0;
    display: flex;
    .product{
        width: 16%;
        padding: 10px;

        div.image{
            display: block;
            text-align: center;
            background: #e5e5e5;
            padding: 7% 0;
            margin-bottom: 20px;
        }

        h6{
            font-weight: normal;
            padding-bottom: 10px;
        }
        strong{
            line-height: 30px;
        }
    }

    &.notActive{
        display: none;
    }
`;