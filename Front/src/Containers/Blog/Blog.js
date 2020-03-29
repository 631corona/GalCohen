import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Blog.css';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Confetti from '../../components/Confetti/Confetti';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';

class Blog extends Component {

    render() {
        let Conffeti = null;
        if (this.props.cureFound) {
            Conffeti = <Confetti />;
        }
        
        return (
            <div className="Blog"  >
                {Conffeti}
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
                <Content />
                <Button clicked={() => this.props.onFindingCure()}> נמצאה תרופה </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cureFound: state.cure.found
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFindingCure: () => dispatch({ type: 'FOUND_CURE' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
