import BaseButton from './BaseButton'
import styled from 'styled-components';

const SecondaryButton = styled(BaseButton).attrs(props => ({
    fill: props.fill || 'auto'
}))`
    background-color: transparent;
    border: 1px solid #D5E2E4;
    box-sizing: border-box;
    border-radius: 20px;
    color: ${props => props.color};
    padding: 8px 10px;
    cursor: pointer;
    transition: all 300ms ease-out;
    width: ${props => props.fill};
    height: 38px;
    font-family: TT Norms;
    margin-bottom: ${props => props.bottom};
    font-size: 14px;

`

export default SecondaryButton;

