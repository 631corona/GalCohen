import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import './SideBar.css';
import Header from '../../components/Header/Header';
import Images from '../../components/Images/Images';
import Graph from '../../components/labsStatus/Graph/Graph';
import ProgressPercentage from '../../components/labsStatus/ProgressPercentage/ProgressPercentage';
import QuarantinedSoldiers from '../../components/Quarantinedsoldiers/QuarantinedSoldiers';
import HomePage from '../../components/HomePage/HomePage';

const sideBar = (props) => (
    <Fragment>
        <Route path="/" exact component={() => (<HomePage />)} />
        <Route path="/images" component={Images} />
        <Route path="/quarantinedSoldiers" component={() => <QuarantinedSoldiers quarantinedSoldiersNames={props.quarantinedSoldiersNames} soldiersAtHome={30} />} />
        <Route path="/cureFoundStatus" component={Graph} />
        <Route path="/cureFoundProgress" component={ProgressPercentage} />
    </Fragment >
);

export default sideBar;