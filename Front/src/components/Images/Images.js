import React from 'react';

import './Images.css';
import Image from './image/image';
import yossiImg from '../../assets/images/YosiBeingTested.jpg';
import Card from '../../hoc/Card/Card';

const images = () => (
    <Card >
        <Image className="FirstPic" src={yossiImg} alt="Yossi" />
        <Image src={yossiImg} alt="Yossi" />
    </Card >
)

export default images;