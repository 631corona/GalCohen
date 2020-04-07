import React from 'react';

import './Images.css';
import yossiImg from '../../assets/images/YosiBeingTested.jpg';
import Card from '../../hoc/Card/Card';

const images = () => (
    <Card >
        <img className="yossi" src={yossiImg} alt="Yossi" />
        <img className="yossi" src={yossiImg} alt="Yossi" />
    </Card >
)

export default images;