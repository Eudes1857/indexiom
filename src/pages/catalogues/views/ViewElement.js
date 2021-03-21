import styled from "styled-components";

export const ItemZone = styled.div``;

export const DivContentBlock = styled.div`
    padding: 50px 0;
    @media screen and (min-width:1024px){
        display: flex;
        flex-direction: row-reverse;
    }
    
    .itemTabView{
        width: 70%;
        padding: 0 20px 0 100px;
        
        .tabTitle{
            display: flex;
            justify-content: space-between;

            div{
                background: ${props => props.active ? '#ef7422' : '#fdf1e8'};
                padding: 20px 20px;
                width: 49.8%;
                text-align: center;
                h5{
                    text-transform: uppercase;
                    color: ${props => props.active ? '#fff' : '#a09790'};
                }
                &.isActive{
                    background: #ef7422;
                    h5{
                        color: #fff;
                    }
                }
            }
        }
    }
`;

export const TabContent = styled.div`
        border: 2px solid #ef7422;
        padding: 20px;
        margin-top: 5px;
        ${props => (props.active ? "" : "display:none")};
        p{
            line-height: 26px;
        }

        table{
            td{
                padding: 10px 0;

                &.label{
                    width: 30%;
                }
                &.value{
                    width: 70%;
                }
            }
        }
`;

export const DivTop = styled.div`
     @media screen and (min-width: 1024px){
        display: flex;
     }
`;

export const DivImg = styled.div`
    display: block;
    text-align: center;
    background: #e5e5e5;
    padding: 7% 0;

    @media screen and (min-width: 1024px){
        width: 30%;
    }
`;

export const DivInfoRight = styled.div`
    display: block;
    text-align: left;

    @media screen and (min-width: 1024px){
        width: 70%;
        padding: 0 20px 0 100px;
    }
    h4{
        text-align: left;
        line-height: 36px;
    }

    div{
        padding-bottom: 25px;

        &.itemDetails{
            table{
                td{
                    padding: 10px 0;
                    &.label{
                        font-weight: 700;
                    }
                }
            }
        }
    }

    button{
        padding: 8px 100px;
        font-size: 16px;
        border: none;
        background: #ef7422;
        color: #fff;
    }
`;