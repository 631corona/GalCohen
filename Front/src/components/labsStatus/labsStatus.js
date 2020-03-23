import React, { Component } from 'react';
import axios from 'axios';
import Graph from './Graph/Graph';

class LabsStatus extends Component {

    state = {
        LabsDetails: null
    }

    componentDidMount() {
        const updatedLabsDetails = [];
        axios.get('http://localhost:3000/v1/labs')
            .then(response => {
                response.data.labs.map(lab => updatedLabsDetails.push(
                    {
                        id: lab.id,
                        name: lab.name,
                        status: lab.status,
                        progressPercentile: lab.progress_percentile
                    })
                );
                this.setState({ LabsDetails: updatedLabsDetails });
            }).catch(error => console.log("failed:" + error));

    }

    render() {
        return (
            <Graph labsData={this.state.LabsDetails} />
        )
    }
}

// constructor(props) {
//     super(props);
//     this.state = {
//         LabsDetails: [
//             {
//             }
//         ]
//     }
// }








export default LabsStatus;