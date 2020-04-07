import React, { useEffect } from 'react';

import './Blog.css';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Confetti from '../../components/Confetti/Confetti';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
import { isCureFound } from '../../store/reducers/labs';


function Blog(props) {

    useEffect(() => {
        props.loadLabsData();
    }, {})

    let Conffeti = null;
    if (props.cureFound) {
        Conffeti = <Confetti />;
    }

    return (
        <div className="Blog" >
            {Conffeti}
            <Header />
            <Button clicked={() => props.onFindingCure()} > נמצאה תרופה </Button>
            <Content />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cureFound: isCureFound(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFindingCure: () => dispatch(actionCreators.foundCure()),
        loadLabsData: () => dispatch(actionCreators.loadCureDetails())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
