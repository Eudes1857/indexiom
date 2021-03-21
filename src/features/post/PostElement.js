import styled from "styled-components";
import FormAccordion from "../../images/form_accordion.png";
import Underline from "../../images/underline.png"
import Opened from "../../images/opened.png"
import Closed from "../../images/closed.png"

export const Section = styled.section`

`;
export const BarTop = styled.div`
    margin: 60px 0;
    text-align: center;
    height: 150px;
    .bar{
        width: 4px;
        height: 100%;
        display: inline-block;
        margin: 0 auto;
        background: #ef7422;
    }
`;

export const Container = styled.div`
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
`;
export const Row = styled.div`
    display: block;
    postition: relative;
    padding: 0 0 50px 0;
`;

export const Article = styled.article`
    h4, h2{
        text-align: center;
    }
    h4{
        font-size: 24px;
    }
    .titleSection{
        text-align: center;
    }
    h2{
        font-size: 36px;
        text-align: center;
        color: #ef7422;
        font-family: GD sage !important;
        background: url(${Underline}) bottom left no-repeat ; 
        display: inline-block;
    }
    .marketingDiv{
        max-width: 500px;
        margin: 0 auto;
        h4{
            color: #ef7422;
            text-transform: uppercase;
            margin: 30px 0;

        }
        p{
            text-align: center;
            margin-bottom: 30px;
            font-weight: 700;
            font-size: 18px;
        }
    }

    .paradoxDiv{
        margin-top: 70px;
        margin-bottom: 100px;
        .tabviewBlock{
            margin: 50px 0;
            border-top: 1px solid #2b2b2b;
            .tabPack{
                padding: 20px 80px;
                border-bottom: 1px solid #2b2b2b;
                background: url(${FormAccordion}) left 18px no-repeat;
                &.opened{
                    h5{
                        background: url(${Opened}) right no-repeat;
                    }
                }
                &.closed{
                    h5{
                        background: url(${Closed}) right no-repeat; 
                    }
                }
                .tabText{
                    padding-right: 50px;
                    p{
                        margin: 10px 0;
                        text-align: justify;
                    }
                }
            }
        }
    }
`;

export const MethodItem = styled.div`
    .blockItems{
        margin: 50px 0;
        .rowItem{
            margin: 0;
            display: flex;

            .imgBlock{
                with: auto;
                div{
                    //height: 667px;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        max-width: 100%;
                    }
                }
                @media screen and (min-width: 1024px){
                    //width: 40%;
                }
            }
            .contentBlock{
                margin: 50px 0;
                border-bottom: 1px solid #2b2b2b;

                text-align: justify;
                @media screen and (min-width: 1024px){
                    width: 60%;
                }
                .readMore{
                    margin: 50px 0;
                }
                ul{
                    li{
                        list-style: none;
                    }
                }
            }
            &:nth-of-type(odd){
                .contentBlock{
                    padding-left: 25px;
                }
                
                .imgBlock{
                    
                    div{
                        padding-right: 25px
                    }
                }
            } 
            &:nth-of-type(even){
                flex-direction: row-reverse;
                .contentBlock{
                    padding-right: 25px;
                    text-align: right;
                }
                .imgBlock{
                    div{
                        padding-left: 25px
                    }
                }
                h5{
                    text-align: right;
                }
            }
        }
    }
`;