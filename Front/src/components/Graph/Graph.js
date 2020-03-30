import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import Chart from 'react-apexcharts';
import Card from '../../hoc/Card/Card';
import Spinner from '../UI/Spinner/Spinner';

class Graph extends Component {

    componentWillMount() {
        this.props.loadLabsData();
    }

    render() {
        console.log("Series:");
        console.log(this.props.series);
        console.log("options:");
        console.log(this.props.options);
        let chart = <Spinner />;
        if (this.props.series[0].data.length !== 0) {
            chart =
                <Chart
                    options={this.props.options}
                    series={this.props.series}
                    type="bar"
                    height="300"
                    width="710"
                />
        }
        return (
            <Card className="labsStatusGraph">
                {chart}
            </Card>
        )
    }
}
const mapStateToProps = state => {
    return {
        options: state.graph.options,
        series: state.graph.series
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadLabsData: () => dispatch(actionCreators.getCureDetails())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);