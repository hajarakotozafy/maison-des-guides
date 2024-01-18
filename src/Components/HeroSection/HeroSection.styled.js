import Styled from 'styled-components';

import HeroBG from '../../assets/images/HeroBG.jpg';

export const HeroContainer = Styled.div`
    width: 100%;
    height: 100vh;
    background: url(${HeroBG}) center center/cover no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 1;
    &::before{
        content:'';
        position: absolute;
        width: 100%;
        height: 100vh;
        background: rgba(18, 10, 72);
        opacity: 0.3;
    }
`

export const HeroSectionInner = Styled.div`
    margin-bottom: 72px;
    color: white;
    z-index: 2;
    align-self: flex-end;
    flex: 1;
    
    h1{
        margin-bottom: 8px;
        font-size: 18px;
        font-weight: 600;
    }
    span{
            font-size: 32px;
            font-weight: 800;
    }
    @media screen and (min-width: 769px){
        margin-bottom: 96px;
        max-width: ${(props) => props.theme.maxWidth}px;
        h1{
            font-size: 32px;
            margin-bottom: 16px;
        }
        span{
            font-size: 64px;
            font-weight: 700px;
        }
    }
`