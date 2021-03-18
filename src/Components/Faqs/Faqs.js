import React, { useState } from 'react';
import Header from '../Common/Header/Header'
import BaseInput from '../Common/Input/BaseInput';
import FaqsIcon from '../../Assets/Icons/faqs-icon.svg'
import { FaqsContainer, Heading, Section, Caption, AboutSection, ListHeading, ListIcon, ListCaption, Info, ListContent, AboutHeader, AboutDropDown, AboutList, MobileAboutHeader, ToggleIcon, Drop} from './FaqsElement'
import SubmitMail from '../SubmitEmail/SubmitMail';
import Footer from '../Common/Footer/Footer';
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import 'animate.css';

const Faqs = () => {
    const [show, setShow] = useState(false)

    const handleDropDown = () => {
        setShow(!show)
    }

    return(
        <div>
            <Header />
            <FaqsContainer>
                <Section>
                    <div>
                        <Heading>We are always trying to help</Heading>
                        <Caption>Carrot enables our customers to access funds by leveraging their digital asset holdings.</Caption>
                        <Caption>Our application process takes less time than making a cup of coffee.</Caption>
                        <BaseInput top="22px" label="Search for answers"/>
                    </div>
                    <img src={FaqsIcon} alt="faqs-icon"/>
                </Section>
                <AboutSection>
                <AboutList>
                    <AboutHeader>About Carrot</AboutHeader>
                    <div>
                        <p>Sign Up</p>
                        <p>Eligibilty Criteria</p>
                        <p>Loan Repayment</p>
                        <p>Default on Loan Repayment</p>
                        <p>Liquidation</p>
                        <p>Exchange rate</p>
                        <p>Refunds</p>
                    </div>
                </AboutList>
                <Drop>
                    <AboutDropDown>
                        <MobileAboutHeader>About Carrot</MobileAboutHeader>
                        <ToggleIcon onClick={handleDropDown}>{show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</ToggleIcon>
                    </AboutDropDown>
                    {show && <div className="animate__animated animate__fadeIn animate__delay-100s">
                        <p>Sign Up</p>
                        <p>Eligibilty Criteria</p>
                        <p>Loan Repayment</p>
                        <p>Default on Loan Repayment</p>
                        <p>Liquidation</p>
                        <p>Exchange rate</p>
                        <p>Refunds</p>
                    </div>}
                </Drop>
                <div>
                <Info>
                    <ListContent><ListIcon>-</ListIcon><ListHeading>Can I call a Carrot representative or visit the Carrot office?</ListHeading></ListContent>
                    <ListCaption>We currently do not provide customer support via phone or in person. However, you can reach us by sending an email to support@carrotcredit.com</ListCaption>
                </Info>
                <Info>
                    <ListContent><ListIcon>+</ListIcon><ListHeading>I don't have a Bamboo account but I want to sign up?</ListHeading></ListContent>
                </Info>
                <Info>
                    <ListContent><ListIcon>+</ListIcon><ListHeading>How do I sign up?</ListHeading></ListContent>
                </Info>
                <Info>
                    <ListContent><ListIcon>+</ListIcon><ListHeading>I am using my Bamboo account details but I am unable to secure a loan?</ListHeading></ListContent>
                </Info>
                <Info>
                    <ListContent><ListIcon>+</ListIcon><ListHeading>I have not received my OTP for account verification?</ListHeading></ListContent>
                </Info>
                <Info>
                    <ListContent><ListIcon>+</ListIcon><ListHeading>I am using my Bamboo account details but I am unable to secure a loan?</ListHeading></ListContent>
                </Info>
                </div>
                </AboutSection>
                <SubmitMail />
                <Footer />
            </FaqsContainer>
        </div>
    )
}

export default Faqs;