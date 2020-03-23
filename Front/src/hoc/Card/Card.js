import React from 'react';

import './Card.css';

const card = (props) => (
    <div className="card">
        {props.children}
    </div>
)

export default card;