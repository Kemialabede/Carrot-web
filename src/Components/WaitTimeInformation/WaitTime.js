import React from 'react';
import { Container, TimeHeader, TimeCaption, TimeContent, Arrow } from './WaitTimeElement'
import Phone from '../../Assets/Images/phone-image.svg';
import ArrowLeft from '../../Assets/Icons/arrow-left.svg';
import ArrowRight from '../../Assets/Icons/arrow-right.svg'


const WaitTime = () => {
    return(
        <TimeContent>
            <Container>
                <Arrow>
                <img src={ArrowRight} alt="arrow"/>
                <img src={ArrowLeft} alt="arrow"/>
                </Arrow>
                <TimeHeader>Minimal Wait Time On Loan Deposits</TimeHeader>
                <TimeCaption>Carrot helps users collect loans based on their InvestBamboo Portfolio. Our application process takes less time than making a cup of coffee.</TimeCaption>
                <TimeCaption>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</TimeCaption>
            </Container>
        <img src={Phone} alt="phone"/>
        </TimeContent>
    )
}

export default WaitTime;