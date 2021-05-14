import React , {useState , useEffect} from 'react';
import { Button } from "../globalStyle"
import { navData } from './data';
import { FaBars, FaTimes, FaTypo3 } from "react-icons/fa"
import {Nav,NavbarContainer,NavbarLogo,MenuIcon,NavMenu,NavItem,NavLink} from"./NavbarStyle"

function Navbar() {
    const [click , setClick] = useState(false);
    const [button , setButton] = useState(true);

    const handelClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    }
    useEffect( () => {
        showButton();
    } , [] );
    window.addEventListener('resize' , showButton);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to="/" onClick={closeMobileMenu}>
                        TRVL
                        <span>
                            <FaTypo3 />
                        </span>
                    </NavbarLogo>
                    <MenuIcon onClick={handelClick}>
                        <span>
                            {click ? 
                            <FaTimes /> :
                            <FaBars />    
                            }
                        </span>
                    </MenuIcon>
                    <NavMenu className={click ? 'active' : ''}>
                        {navData.map((item , index) => {
                            return(
                            <NavItem key={index}>
                                <NavLink 
                                    to={item.path} 
                                    className={item.className} 
                                    onClick={closeMobileMenu}
                                >
                                    {item.link}
                                </NavLink>
                            </NavItem>
                            );
                        })}
                    </NavMenu>
                    {button && <Button to="/sign-up">SIGN UP</Button>}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
