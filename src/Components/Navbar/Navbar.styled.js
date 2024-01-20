import Styled from 'styled-components';

export const NavbarContainer = Styled.div`
    z-index: 10;
    position: fixed;
    background: rgba(68, 102, 137);
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 769px){
        // background: rgba(68, 102, 137, 0.8);
        background: transparent;
        // background: white;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
`

export const Logo = Styled.img`
    width: 96px;
    @media screen and (min-width: 769px){
        width: 120px;
    }
`

export const NavbarInner = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        height: auto;
        display: flex;
        align-items: center;
    }
    .links-item{
        position: absolute;
        top: 92px;
        left: 100%;
        width: 100%;
        height: Calc(100vh - 92px);
        padding: 24px 16px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        transition: 0.4s ease;
        gap: 16px;
        a{
            font-size: 16px;
            font-weight: 400;
            color: ${(props) => props.theme.colors.brandColor};
            text-decoration: none;
            border-bottom: 1px solid ${(props) => props.theme.colors.brandColor};
            padding: 16px 0;
        }
        &.active{
            left: 0;
        }
        
    }
    @media screen and (min-width: 769px){
        flex: 1;
        max-width: ${(props) => props.theme.maxWidth}px;
        .links-item{
            width: auto;
            background: transparent;
            align-items: center;
            position: static;
            height: auto;
            flex-direction: row;
            a{
                border: none;
                padding: 0;
                color: #ffffff;
                // color: #717275;
            }
        }
    }
`

export const LanguageBtn = Styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 20px;
    // background: rgba(113, 114, 117, 0.4);
    // border: 1px solid #717275;
    background: rgba(255, 255, 255, 0.95);
    span{
        color: ${(props) => props.theme.colors.textBlack};
        font-weight: 600;
        font-size: 14px;
    }
    svg{
        width: 24px;
    }
`