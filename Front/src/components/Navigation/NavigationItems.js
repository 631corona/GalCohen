import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul >
        <NavigationItem link="/" active >Pictures </NavigationItem>
        <NavigationItem link="/" >Quarantined soldier</NavigationItem>
        <NavigationItem link="/" >Soldiers at home</NavigationItem>
        <NavigationItem link="/" >Cure Found Status</NavigationItem>
        <NavigationItem link="/" >Labs Progress Percentage</NavigationItem>
    </ul>

);

export default navigationItems;