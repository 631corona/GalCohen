import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../hoc/Card/Card';
import './ProgressPercentage.css';

class ProgressPercentage extends Component {

    render() {
        const labs = this.props.labsDetails.sort((lab1, lab2) => (lab1.name > lab2.name) ? 1 : -1)
        const labsInTable = labs.map(lab =>
            <tr key={lab.id} >
                <td className="labStatus">{(lab.status === "IN_PROGRESS") ? "IN PROGRESS" : lab.status} </td>
                <td className="labProgressPercentile" > {lab.progress_percentile} % </td>
                <td className="LabName">{lab.name} </td>
            </tr>
        )

        return (
            <Card className="progressPercentage" >
                <table className="progressPercentage">
                    <tbody>
                        <tr className="progressPercentageHeader">
                            <td><strong>  סטטוס</strong></td>
                            <td><strong>  אחוזי הצלחה</strong></td>
                            <td><strong> שם המעבדה</strong> </td>
                        </tr>
                        {labsInTable}
                    </tbody>
                </table>
            </Card>
        )
    }
}
const mapStateToProps = state => {
    return {
        labsDetails: state.labs.labsDetails
    }
};

export default connect(mapStateToProps)(ProgressPercentage);