import styled from 'styled-components';

export const HumbergerContainer = styled.div`
    @media screen and (min-width: 769px){
        display: none;
    }
    position: relative;
    height: 60px;
    width: 60px;
    z-index: 999999;
    cursor: pointer;
    border-radius: 0;
    background: transparent;
    transition: all 0.4s cubic-bezier(.63, .46, 0, 1.35);
    .icon-1, .icon-2, .icon-3 {
        position: absolute;
        left: 25%;
        top: 50%;
        width: 30px;
        height: 3px;
        background: #ffffff;
        transition: all 0.4s cubic-bezier(.63, .46, 0, 1.35);
    }

    .icon-1 {
        transform: translateY(6.5px);
        animation-delay: 100ms;
    }
    
    .icon-2 {
        transform: translateY(-1.5px)
    }
    
    .icon-3 {
        transform: translateY(-9.5px);
        animation-delay: 250mx;
    }
    
    .icon-1.a{
        border-radius: 100px;
        transform: rotate(40deg);
    }
    
    .icon-3.b{
        border-radius: 100px;
        transform: rotate(-40deg);
    }

    .icon-2.c{
        opacity: 0;
    }

    .clear{
        clear: both;
    }
`