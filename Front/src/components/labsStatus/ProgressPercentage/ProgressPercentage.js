import React, { Component } from 'react';
import axios from 'axios';

import Card from '../../../hoc/Card/Card';
import Lab from './Lab/Lab';
import './ProgressPercentage.css';

class ProgressPercentage extends Component {

    state = {
        labs: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/v1/labs')
            .then(response => {
                console.log(response)
                let labsToUpdate = response.data.labs.map
                    (lab =>
                        ({
                            id: lab.id,
                            name: lab.name,
                            ProgressPercentage: lab.progress_percentile,
                            status: lab.status
                        })
                    )
                console.log("labsToUpdate")
                console.log(labsToUpdate);
                this.setState({ labs: labsToUpdate });
            });
    }

    render() {
        const labs = this.state.labs.sort((lab1, lab2) => (lab1.name > lab2.name) ? 1 : -1)
        const labsInTable = labs.map(lab => {
            return (
                <tr>
                    <td className="labStatus">{(lab.status === "IN_PROGRESS") ? "IN PROGRESS" : lab.status} </td>
                    <td className="labProgressPercentage" > {lab.ProgressPercentage} % </td>
                    <td id={lab.id} className="LabName">{lab.name} </td>
                </tr>
            )
        }

        )

        return (
            <Card className="progressPercentage" >
                <table className="progressPercentage">
                    <tr className="progressPercentageHeader">
                        <td><strong>  סטטוס</strong></td>
                        <td><strong>  אחוזי הצלחה</strong></td>
                        <td><strong> שם המעבדה</strong> </td>
                    </tr>
                    {labsInTable}
                </table>
            </Card>
        )
    }
}

export default ProgressPercentage;