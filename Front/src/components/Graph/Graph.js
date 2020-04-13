import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatusNumber } from '../../store/utility';
import { getStatusTitle } from '../../store/utility';

import Chart from 'react-apexcharts';
import Card from '../../hoc/Card/Card';
import Spinner from '../UI/Spinner/Spinner';


class Graph extends Component {
    state = {
        options: {
            chart: {
                background: '#f4f4f4',
                foreColor: '#333'
            },
            xaxis: {
                type: 'category',
                categories: []
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            fill: {
                colors: ['rgb(250, 178, 168)']
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return getStatusTitle(val)
                }
                ,
                style: {
                    fontSize: '10px'
                }
            },
            title: {
                text: 'Cure found status',
                align: 'center',
                margin: 50,
                offsetY: 20,
                style: {
                    fontSize: '30px'
                }
            }
        },
        series: [
            {
                name: 'CureFound',
                data: []
            }
        ]
    }
    render() {
        let { series, options } = this.state;

        const updatedData = this.props.labsDetails.map(lab => {
            return getStatusNumber(lab.status);
        });
        const updatedCatagories = this.props.labsDetails.map(lab => lab.name);

        series[0].data = updatedData;
        options.xaxis.categories = updatedCatagories;

        let chart = <Spinner />;
        if (series[0].data.length !== 0 && options.xaxis.categories.length !== 0) {
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
            <Card rowFlow>
                {chart}
            </Card>
        )
    }
}
const mapStateToProps = state => {
    return {
        labsDetails: state.labs.labsDetails
    }
};

export default connect(mapStateToProps)(Graph);