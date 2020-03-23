import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import './Blog.css';
import Header from '../../components/Header/Header';
import Images from '../../components/Images/Images';
import Graph from '../../components/labsStatus/Graph/Graph';
import ProgressPercentage from '../../components/labsStatus/ProgressPercentage/ProgressPercentage';
import QuarantinedSoldiers from '../../components/Quarantinedsoldiers/QuarantinedSoldiers';
import HomePage from '../../components/HomePage/HomePage';
import SideBar from '../SideBar/SideBar'


const quarantinedSoldiersNames = [{ name: "Carmel dahan", id: 1 }, { name: "Gal Cohen", id: 2 }];

class Blog extends Component {

    SideBarClickedHandler() {
        switch (this.state.ShownComponentId) {
            case 1:
                return <Header />;
            case 2:
                return <Images />
            case 3:
                return <QuarantinedSoldiers soldiersAtHome="32" quarantinedSoldiersNames={quarantinedSoldiersNames} />;
            case 4:
                return <Graph />;
            case 5:
                return <ProgressPercentage />;
        }
    }

    render() {
        return (
            <div className="Blog"  >
                <Header />
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/cureFoundStatus">ניטור אחר מציאת חיסון  </NavLink></li>
                            <li><NavLink to="/cureFoundProgress">התקדמות מציאת חיסון  </NavLink></li>
                            <li><NavLink to="/quarantinedSoldiers">חיילים בהסגר</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/images',
                                hash: "#submit",
                                search: '?quick-submit=true'
                            }}>תמונות </NavLink> </li>
                            <li><NavLink to="/" exact>מסך הבית </NavLink></li>
                        </ul>
                    </nav>
                </header>
                <SideBar quarantinedSoldiersNames={quarantinedSoldiersNames} />
            </div>
        );
    }
}


export default Blog;
