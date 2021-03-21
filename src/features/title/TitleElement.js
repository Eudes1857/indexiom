import styled  from 'styled-components'
import TitleFondation from '../../images/title-fondation.jpg'

export const TitleBlock = styled.section`
    background: url(${props => props.img}) center no-repeat;
    background-size: cover;
    min-height: 500px;
    position: relative;
`;

export const TitleOverlay = styled.div`
    //background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const TitleContainer = styled.div`
    width: calc(100% - 4rem);
    margin: 0 auto;
    @media screen and(max-width: 1280px){
        width: calc(100% - 19rem);
    }
    @media screen and (max-width: 1920px){
        width: calc(100% - 19rem);
    }
`;

export const TitleContent = styled.div`
    position: relative;
    @media screen and (min-width: 1024px){
        top: 200px;
    }
`;

export const TitleHead = styled.div`
    margin-bottom: 50px;
    h4{
        color: #fff;
        opacity: 0.4;
        font-size: 36px;
        font-weight: bolder;
    }
`;

export const TitleName = styled.div`
    margin-bottom: 50px;
    h2{
        color: #fff;
        font-size: 48px;
        font-weight: bolder;
        font-family: GD sage !important;
    }
`;

export const TitleButton = styled.div`
    @media screen and (min-width: 800px){
        display: flex;
        justify-content: start;

        .firstButton{
            margin-right: 30px;
        }
    }
`;