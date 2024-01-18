import React from 'react';
import { HumbergerContainer } from './Humberger.Styled';

const HumbergerIcon = ({isMenuDisplayed, setMenuDisplayed}) => {
    return (
        <HumbergerContainer onClick={() => setMenuDisplayed(!isMenuDisplayed)} className={isMenuDisplayed ? "humDis": ""}>
            <div className={isMenuDisplayed ? "icon-1 a": "icon-1"}></div>
            <div className={isMenuDisplayed ? "icon-2 c": "icon-2"}></div>
            <div className={isMenuDisplayed ? "icon-3 b": "icon-3"}></div>
            <div className="clear"></div>
        </HumbergerContainer>
    )
}

export default HumbergerIcon;