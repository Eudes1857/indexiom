import styled from "styled-components";

export const BodyCard = styled.div``;

export const Message = styled.div`
    
    div{
        p{
            text-align: center;
        }
    }
`;

export const Member = styled.div`

    @media screen and (max-width: 800px){
    max-width: 100%;
    width: 100%;
    }
    position: relative;
    display: inline-block;
    max-width: 33.3333%;
    width: 33.3333%;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 50px;

    &.membre0{
        width: 100%;
        max-width: 100%;
        .card{
            width: 380px;
            height: 380px;
            margin: 0 auto;
            @media screen and (max-width: 600px){
                width: auto;
                height: 259px;
                min-height: 100%;
            }
        }
    }

    .card{
        
        img.photo{
            //border-radius: 50%;
        }
        h5{
            color: #fff;
            &.poste{
                font-weight: 300;
            }
        }
        .context{
            position: absolute;
            width: 100%;
            display: block;
            bottom: 20px;
    
            ul.socialNet{
                display: flex;
                width: 60%;
                margin: 0 auto;
                list-style: none;
                li{
                    width: 25%;
                    margin: 10px;
                }
            }
        }
    }
    
`;

export const CardM = styled.div`
    background: url(${props => props.bg}) center no-repeat;
    border-radius: 50%;
    position: relative;
    width: 360px;
    height: 360px;
    margin: 0 auto;
    background-size: 100%;
    border: 2px solid #ef7422;

    @media screen and (max-width: 600px){
        width: auto;
        height: 259px;
        min-height: 100%;
    }
    
`;