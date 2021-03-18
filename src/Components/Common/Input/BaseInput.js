import React from 'react';
import { Input } from './InputElements';

const BaseInput = ({label, top, primary, color}) => {
    return(
        <Input placeholder={label} top={top} primary={primary} color={color}/>
    )
}

export default BaseInput;