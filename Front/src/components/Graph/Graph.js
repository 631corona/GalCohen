import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import {getStatusNumber} from '../../store/utility';


import Chart from 'react-apexcharts';
import Card from '../../hoc/Card/Card';
import Spinner from '../UI/Spinner/Spinner';

class Graph extends Component {

    componentWillMount() {
        this.props.loadLabsData();
    }

    render() {
        const series = this.props.series;
        const options = this.props.options;

        const updatedData = this.props.labsDetails.map(lab => {
            return getStatusNumber(lab.status);
        });
        const updatedCatagories = this.props.labsDetails.map(lab => lab.name);

        series[0].data= updatedData;
        options.xaxis.categories= updatedCatagories;

        let chart = <Spinner />;
        if (this.props.series[0].data.length !== 0) {
            chart =
                <Chart
                    options={options}
                    series={series}
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
        series: state.graph.series,
        labsDetails: state.labs.labsDetails
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadLabsData: () => dispatch(actionCreators.getCureDetails())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);