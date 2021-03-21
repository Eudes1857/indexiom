import React from 'react'
import IconContent from "../../images/icon-content.png"
import PoligoneTop from "../../images/polygonetop.png";
import PoligoneBottom from "../../images/polygonebottom.png"
import styled from 'styled-components';
import Underline from "../../images/underline.png"


export const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 80px;
    h2{
        font-size: 36px;
        text-align: center;
        color: #ef7422;
        font-family: GD sage !important;
        background: url(${Underline}) bottom left no-repeat ; 
        display: inline-block;
    }
`;

export const SectionBottom = styled.div`
 background: #fce3d3;
 padding: 80px 0;
`;
export const RowBottom = styled.div`
    display: flex;
`;
export const Column = styled.div`
    max-width: 20%;
    padding: 0 10px;
    display: flex;
    max-width: 1800px;
    overflow-y: hidden;
    width: 20%;
    &:nth-of-type(odd){
        flex-direction: column-reverse;

        .textBlock{
            div{
                margin-bottom: 30px;
            }
            background: url(${PoligoneBottom}) bottom no-repeat;
            margin-bottom: -16px;
        }
        .counter{

        }
    }
    &:nth-of-type(even){
        flex-direction: column;

        .textBlock{
            background: url(${PoligoneTop}) top no-repeat;
            margin-top: -16px;
            div{
                margin-top: 30px;
                height: 100%;
            }
        }

        .counter{

        }
    }

`;

export const ImageBlock = styled.div`
    width: auto;
    position: relative;
    div{
            height: 250px;
            img {
                width: 100%;
                height: inherit;
                object-fit: cover;
                max-width: 100%;
            }
    }
`;
export const TextBlock = styled.div`
    //min-height: 1360px;
    height: 100%;
    z-index: 1;
    @media screen and (min-width: 1440px){
        //min-height: 850px;
    }
    div{
        height: 97.8%;
        @media screen and (min-width: 1600px){
            height: 95.8%;
        }
        @media screen and (min-width: 2200px){
            height: 92.8%;
        }
        background: #fff;
        padding: 20px;
        @media screen and (max-width: 1275px){
            padding: 18px;
        }
        @media screen and (max-width: 1200px){
            padding: 10px;
        }
        
    }
`; 
export const Counter = styled.div`
    position: absolute;
    height: auto !important;
    bottom: -24px;
    right: 89px;
    span{
        font-size: 100px;
        color: #fce3d3;
        font-weight: bold;
    }
`;