import styled from "styled-components";


export const Content = styled.div`
    display: flex;
`;

export const BlockRight = styled.div`
    width: 30%;
    background: #ededed;
    padding: 20px;
    max-height: 380px;
    .titre{
        background: #ef7422;
        color: #fff;
        padding: 10px 20px;
        text-align: center;
    }

    .table{
        .tr{
            display: flex;
            padding-top: 20px;
            .td{
                width: 50%;
                padding: 10px;
            }
            &.last{
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #000;
            }
        }
        .buttons{
            margin-top: 20px;
            button{
                border: 0;
                width: 100%;
                padding: 10px;
                font-size: 18px;
            }
            .buy{
                margin-bottom: 20px;
                button{
                    background: #ef7422;
                    color: #fff;
                                        
                }
            }
            .market{
                button{
                    background: #fff;
                    color: #ef7422;
                }
            }
        }
    }
`;

export const BlockLeft = styled.div`
    width: 70%;

    .flex{
        display: flex;
        margin: 0 20px 20px 0;
        border-bottom: 1px solid;
        padding: 0 20px 20px 0;
        div{
            width: 33%;
            padding: 0 15px;
            &.image{
                display: block;
                text-align: center;
            }
            &.quantity{
                text-align: center;
            }
            &.price{
                text-align: right;
                div{
                    padding-bottom: 20px;
                    display: block;
                    width: 100%;
                }
            }
        }
    }
`;