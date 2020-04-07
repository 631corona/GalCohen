import React, { Component } from 'react';

import './AboutUs.css';
import PopUp from '../UI/PopUp/PopUp';

class AboutUs extends Component {
    state = {
        showPopUp: false
    };

    popUpClosedHandler = () => {
        this.setState({ showPopUp: false })
    }

    render() {
        return (
            <div className="AboutUs">
                <p className="AboutUs">
                    ברוכים הבאים לאתר הקורונה
            <br />
                    לנוכח המציאות הלא פשוטה בה אנו נמצאים
            <br />
                    אנו כאן כדי לאפשר אחיזה פשוטה ומהירה בתמונת המצב הנוכחית
             <br />
                    ♥ רק בריאות
                 </p>
                {this.state.showPopUp ? <PopUp show={this.state.showPopUp} popUpClosed={this.popUpClosedHandler} /> : null}
            </div>
        );

    }
}

export default AboutUs;