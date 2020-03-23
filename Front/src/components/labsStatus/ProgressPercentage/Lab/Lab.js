import React, { Component } from 'react';

import './Lab.css';

const Lab = (props) => {
    console.log(props);
    return (
        <div className="lab">
            <p>  <strong> Lab: </strong> {props.name} <strong> Progress Percentage:</strong> {props.ProgressPercentage}% </p>
        </div>
    )
}

export default Lab;