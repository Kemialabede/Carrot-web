import React, { useState} from 'react'
import HeaderIcon from '../../../Assets/Icons/header-icon.svg'
import HeaderLogo from '../../../Assets/Icons/header-logo.svg'
import SecondaryButton from '../Button/SecondaryButton';
import MobileHeaderIcon from '../../../Assets/Icons/mobile-header-icon.svg'
import DropLogo from '../../../Assets/Icons/drop-logo.svg'
import Close from '../../../Assets/Icons/Close.svg'
import { Container, Icon, Logo, HeaderLeft, HeaderRight, Faqs, MobileContainer, DropDown, DropDownHeader, DropDownLogo, DropImage, Footer, FooterSection } from './HeaderElements'
import { NavLink } from 'react-router-dom';
import MenuIcon from '../../../Assets/Icons/menu-button.svg';
import Facebook from '../../../Assets/Icons/facebook-drop.svg';
import Twitter from '../../../Assets/Icons/twitter-drop.svg';
import Instagram from '../../../Assets/Icons/instagram-drop.svg';
import Linkedin from '../../../Assets/Icons/linkedin-drop.svg'
import { CopyRight } from '../Footer/FooterElement';
import 'animate.css';

const Header = () => {
    const [set, setState] = useState(false)
    const handleChange = () => {
        setState(true)
    }

    const handleClose = () => {
        setState(false)
    }

    const activeStyle = {
        fontWeight: "bold"
    }
    
    return(
        <>
            <Container>
                <HeaderLeft>
                    <Icon src={HeaderIcon} alt="header-icon" />
                    <NavLink to='/'><Logo src={HeaderLogo} alt="header-logo" /></NavLink>
            </HeaderLeft>
            <HeaderRight>
                <NavLink to='/faqs' activeStyle={activeStyle}><Faqs>FAQs</Faqs></NavLink>
                <SecondaryButton fill="126px">Sign Up</SecondaryButton>
            </HeaderRight>
            </Container>
            <MobileContainer>
                <HeaderLeft>
                    <Icon src={ MobileHeaderIcon } alt="header-icon" />
                    <Logo src={HeaderLogo} alt="header-logo" />
                </HeaderLeft>
                <HeaderRight onClick={handleChange}>
                    <Icon src={MenuIcon} />
                </HeaderRight>
            </MobileContainer>
            {set && <DropDown className="animate__animated animate__slideInDown animate__delay-50s">
                <DropDownHeader>
                    <DropDownLogo src={DropLogo} alt="dropdown-logo" />
                    <DropDownLogo src={Close} onClick={handleClose} />
                </DropDownHeader>
                <NavLink to='/faqs'><Faqs>FAQs</Faqs></NavLink>
                <SecondaryButton fill="126px" color="white">Sign Up </SecondaryButton>
                <DropImage>
                    <img src={Facebook} alt="facebook"/>
                    <img src={Twitter} alt="twitter"/>
                    <img src={Instagram} alt="instagram"/>
                    <img src={Linkedin} alt="linkedin"/>
                </DropImage>
                <FooterSection>
                <Footer>
                    <p>Docs</p>
                    <p>Privacy</p>
                    <p>Terms of Service</p>
                </Footer>
                <CopyRight>&copy; carrotcredit 2021</CopyRight>
            </FooterSection>
            </DropDown>}
        </>
    )
}

export default Header;