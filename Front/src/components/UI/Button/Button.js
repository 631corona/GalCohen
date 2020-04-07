import React from 'react';
import { Button } from '@material-ui/core';
import './Button.css';

function button(props) {
    return <Button color="default" className="Button" onClick={props.clicked}>{props.children}</Button>;
}
export default button;