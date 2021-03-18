import React from 'react'
import FooterIcon from '../../../Assets/Icons/footer-logo.svg';
import Facebook from '../../../Assets/Icons/facebook.svg';
import Twitter from '../../../Assets/Icons/twitter.svg';
import Instagram from '../../../Assets/Icons/instagram.svg';
import Linkedin from '../../../Assets/Icons/linkedin.svg';
import { FooterContent, FooterSection, FooterIcons, FooterLine, OtherSection, FooterDocuments, MobileOtherSection, CopyRight } from './FooterElement'

const Footer = () => {
    return(
        <FooterContent>
            <FooterSection>
                <img src={FooterIcon} alt="footer"/>
                <p>FAQs</p>
                <div>
                    <FooterIcons src={Facebook} alt="facebook"/>
                    <FooterIcons src={Twitter} alt="twitter"/>
                    <FooterIcons src={Instagram} alt="instagram"/>
                    <FooterIcons src={Linkedin} alt="linkedin"/>
                 </div>
            </FooterSection>
            <FooterLine />
            <OtherSection>
                <p>&copy; carrotcredit 2021</p>
                <FooterDocuments>
                    <p>Docs</p>
                    <p>Privacy</p>
                    <p>Terms of Service</p>
                </FooterDocuments>
            </OtherSection>
            <MobileOtherSection>
                <FooterDocuments>
                    <p>Docs</p>
                    <p>Privacy</p>
                    <p>Terms of Service</p>
                </FooterDocuments>
                <CopyRight>&copy; carrotcredit 2021</CopyRight>
            </MobileOtherSection>
        </FooterContent>
    )
}

export default Footer;