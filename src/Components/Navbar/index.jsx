import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HumbergerIcon from '../HumbergerMenu';
import { NavbarContainer, NavbarInner, Logo } from './Navbar.styled';
import { NavbarData } from './NavbarData';

import logoImage from '../../assets/images/logo.png';

const Navbar = () => {
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
                <HumbergerIcon isMenuDisplayed={isMenuDisplayed} setMenuDisplayed={setMenuDisplayed}/>
            </NavbarInner>
        </NavbarContainer>
    )
}

export default Navbar;