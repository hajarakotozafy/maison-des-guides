import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MG, US, FR } from 'country-flag-icons/react/3x2';

import HumbergerIcon from '../HumbergerMenu';
import { NavbarContainer, NavbarInner, Logo, LanguageBtn } from './Navbar.styled';
import { NavbarData } from './NavbarData';

import logoImage from '../../assets/images/logo.png';

const Navbar = ({changeLng, setChangeLng}) => {
    const [isMenuDisplayed, setMenuDisplayed] = useState(false);

    return (
        <NavbarContainer>
            <NavbarInner>
                <Link to='/' onClick={() => setMenuDisplayed(false)}><Logo src={logoImage} alt=''/></Link>
                <div className={isMenuDisplayed ? 'links-item active' : 'links-item'}>
                    {NavbarData.map(({title, link}, index) => {
                        return(
                            <Link key={index} to={link} onClick={() => setMenuDisplayed(false)}>
                                {title}
                            </Link>
                        )
                    })}

                </div>
                <LanguageBtn onClick={() => setChangeLng(!changeLng)}>
                    <span>FR</span>
                    <FR title="Français"/>
                </LanguageBtn>
                {/* <LanguageBtn onClick={() => setChangeLng(!changeLng)}>
                    <span>MG</span>
                    <MG title="Malagasy"/>
                </LanguageBtn> */}
                {/* <LanguageBtn onClick={() => setChangeLng(!changeLng)}>
                    <span>EN</span>
                    <US title="English"/>
                </LanguageBtn> */}
                <HumbergerIcon isMenuDisplayed={isMenuDisplayed} setMenuDisplayed={setMenuDisplayed}/>

            </NavbarInner>
        </NavbarContainer>
    )
}

export default Navbar;