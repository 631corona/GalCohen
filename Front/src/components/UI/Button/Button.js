import React from 'react';
import './Button.css';
import styled from 'styled-components';

const Button = styled.button`
color: #f50057; 
background-color:#c;
border: none;
&:hover{
    background-color:#ffe6e6;
    box-shadow: 0 3px 5px rgba(232,170,142,1);
}
`;

export const FoundCureButton = styled(Button)`
bottom: 3px;
left: 4px;
position: absolute;
box-shadow: inset 82px 46px 52px -38px rgba(232,170,142,1);
`;

export const SubmitButton = styled(Button)`
position: relative;
`;

function button(props) {
    return <Button onClick={props.clicked}>{props.children}</Button>;
}
export default button;