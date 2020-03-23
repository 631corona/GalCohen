import React, { Component } from 'react';

import './HomePage.css';
import PopUp from '../UI/PopUp/PopUp';

class HomePage extends Component {
    state = {
        show: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: true });
        }, 5000)
    }
    render() {
        return (
            <div className="HomePage">
                <p className="HomePage">
                    ברוכים הבאים לאתר הקורונה
            <br />
                    לנוכח המציאות הלא פשוטה בה אנו נמצאים
            <br />
                    אנו כאן כדי לאפשר אחיזה פשוטה ומהירה בתמונת המצב הנוכחית
             <br />
                    ♥ רק בריאות
                 </p>
                {this.state.show ? <PopUp /> : null}
            </div>
        );

    }
}

export default HomePage;