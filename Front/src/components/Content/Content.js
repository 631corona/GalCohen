import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import './Content.css';
import Images from '../../components/Images/Images';
import Graph from '../../components/Graph/Graph';
import ProgressPercentage from '../../components/ProgressPercentage/ProgressPercentage';
import QuarantinedSoldiers from '../../components/Quarantinedsoldiers/QuarantinedSoldiers';
import AboutUs from '../../components/AboutUs/AboutUs';

const content = (props) => (
    <Fragment>
        <Route path="/" exact component={AboutUs} />
        <Route path="/images" component={Images} />
        <Route path="/quarantinedSoldiers" component={QuarantinedSoldiers} />
        <Route path="/cureFoundStatus" component={Graph} />
        <Route path="/cureFoundProgress" component={ProgressPercentage} />
    </Fragment >
);

export default content;