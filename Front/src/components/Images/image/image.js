import React from 'react';

import './image.css';

const image = (props) => (
    <img className="image" src={props.src} alt={props.alt} />
)

export default image;