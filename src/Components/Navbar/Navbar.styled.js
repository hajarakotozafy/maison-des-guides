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
        background: rgba(68, 102, 137, 0.8);
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
            font-size: 18px;
            font-weight: 500;
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
            }
        }
    }
`