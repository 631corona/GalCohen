import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import './Content.css';
import Images from '../../components/Images/Images';
import Graph from '../../components/Graph/Graph';
import ProgressPercentage from '../../components/ProgressPercentage/ProgressPercentage';
import QuarantinedSoldiers from '../../components/Quarantinedsoldiers/QuarantinedSoldiers';
import HomePage from '../../components/HomePage/HomePage';

const content = (props) => (
    <Fragment>
        <Route path="/" exact component={HomePage} />
        <Route path="/images" component={Images} />
        <Route path="/quarantinedSoldiers" component={QuarantinedSoldiers} />
        <Route path="/cureFoundStatus" component={Graph} />
        <Route path="/cureFoundProgress" component={ProgressPercentage} />
    </Fragment >
);

export default content;