import React, { Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop'

import './PopUp.css';

const popUp = (props) => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.popUpClosed} />
        <div className="PopUp">
            <p className="PopUp">
                והבדידות והבדידים  החברים היחידים שנשארו לי
            </p>
        </div>
    </Fragment>
);

export default popUp;