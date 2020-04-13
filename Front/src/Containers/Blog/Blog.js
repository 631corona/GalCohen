import React, { useEffect } from 'react';

import './Blog.css';
import NavBar from '../../components/NavBar/NavBar';
import Content from '../../components/Content/Content';
import Confetti from '../../components/Confetti/Confetti';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import { FoundCureButton as Button } from '../../components/UI/Button/Button';
import { isCureFound } from '../../store/reducers/labs';

function Blog(props) {

    const loadLabsData = props.loadLabsData;

    useEffect(() => {
        loadLabsData();
    }, [loadLabsData])

    let Conffeti = null;
    if (props.cureFound) {
        Conffeti = <Confetti />;
    }
    return (
        <div className="Blog" >
            {Conffeti}
            <NavBar />
            <Button onClick={() => props.onFindingCure()}> Cure Found</Button>
            <Content />

        </div >
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
