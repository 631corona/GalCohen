import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

import logo from '../../assets/images/logo.png';
import background from '../../assets/images/topBarBackground.PNG';

const header = () => (
    <div className="Header" style={{ backgroundImage: `url(${background})` }}>
        <img className="Header" src={logo} alt="logo" />
        <li className="login"><NavLink className="login" to="/" exact>התחברות </NavLink></li>
        <li><NavLink to="/cureFoundStatus">ניטור אחר מציאת חיסון  </NavLink></li>
        <li><NavLink to="/cureFoundProgress">התקדמות מציאת חיסון  </NavLink></li>
        <li><NavLink to="/quarantinedSoldiers">חיילים בהסגר</NavLink></li>
        <li><NavLink to={{
            pathname: '/images',
            hash: "#submit",
            search: '?quick-submit=true'
        }}>תמונות </NavLink> </li>
        <li><NavLink to="/" exact>עלינו </NavLink></li>
    </div >
)

export default header;