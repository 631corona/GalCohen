import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import background from '../../assets/images/topBarBackground.PNG';
import styled from 'styled-components';

const Img = styled.img`
width: 12%;
height:95%;
`
const NavBar = styled.div`
box-shadow: 2px 2px 5px  gray;
    height: 70px;
    margin: 0 0 4%;
    display: flex;
    background-image: url(${background});
`

const Link = styled(NavLink)`
text-decoration: none;
    color:black;
    font-size: 19px;
    font-weight: bolder;
    font-family: 'Secular One', sans-serif;  
    margin: 4px;
    line-height: 250%;
    border-radius:6px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active{
        text-decoration: none;
        background-image: url(${background});
        filter: brightness(1.25);
    };
    &:hover{
        color:  black;
        text-decoration: none;
    };

`

const navBar = () => (
    <NavBar className="navBar" >
        <Img className="navBar" src={logo} alt="logo" />
        <Link className="login" to="/login" exact>Login </Link>
        <Link to="/cureFoundStatus"> Cure Monitoring  </Link>
        <Link to="/cureFoundProgress">Cure Advanced</Link>
        <Link to="/quarantinedSoldiers">Soldiers at home</Link>
        <Link to={{
            pathname: '/images',
            hash: "#submit",
            search: '?quick-submit=true'
        }}>Pictures </Link>
        <Link to="/" exact>About </Link>
    </NavBar >
)

export default navBar;