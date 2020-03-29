import React, { Component } from 'react';
import axios from 'axios';

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
                categories: [
                ]

            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            fill: {
                colors: ['#f44336']
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    switch (val) {
                        case (1):
                            return "FAILED";
                        case (2):
                            return "PROGRESS";
                        case (3):
                            return "SUCCESS";
                        default:
                            return "no status";
                    }
                },
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
        series: [{
            name: 'CureFound',
            data: [

            ]
        }],
        loading: false

    }

    componentDidMount() {

        this.setState({ loading: true });
        let updatedData = [];
        let updatedCatagory = [];
        axios.get('http://localhost:3000/v1/labs')
            .then(response => {
                response.data.labs.map(lab => {
                    updatedCatagory.push(lab.name);
                    let status = null;
                    switch (lab.status) {
                        case ('FAILED'):
                            status = 1;
                            break;
                        case ('IN_PROGRESS'):
                            status = 2;
                            break;
                        case ('SUCCESS'):
                            status = 3;
                            break;
                        default:
                            status = 0;
                    }
                    updatedData.push(status);
                }
                )
                let updatedState = this.state;
                updatedState.series[0].data = updatedData;
                updatedState.options.xaxis.categories = updatedCatagory
                updatedState.loadiing = false;
                this.setState(updatedState);
            })

    }

    render() {
        let chart = <Spinner />;
        if (!this.state.loading || this.state.series[0].data.length !== 0) {

            chart =
                <Chart
                    options={this.state.options}
                    series={this.state.series}
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

export default Graph;