import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import './Content.css';
import Images from '../../components/Images/Images';
import Graph from '../../components/Graph/Graph';
import ProgressPercentage from '../../components/ProgressPercentage/ProgressPercentage';
import QuarantinedSoldiers from '../../components/Quarantinedsoldiers/QuarantinedSoldiers';
import AboutUs from '../../components/AboutUs/AboutUs';
import Auth from '../../Containers/Auth/Auth';

const content = () => (
    <Fragment>
        <Route path="/" exact component={AboutUs} />
        <Route path="/images" component={Images} />
        <Route path="/quarantinedSoldiers" component={QuarantinedSoldiers} />
        <Route path="/cureFoundStatus" component={Graph} />
        <Route path="/cureFoundProgress" component={ProgressPercentage} />
        <Route path="/login" component={Auth} />
    </Fragment >
);

export default content;