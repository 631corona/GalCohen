import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../UI/Spinner/Spinner';
import Card from '../../hoc/Card/Card';
import styled from 'styled-components';

const Td = styled.td`
text-align: left;
    color: black;
    padding:10px;
    border: 5px   rgb(250, 178, 168) solid;
    border-radius: 14px;
    word-spacing: 2px;
    letter-spacing: 1.5px;
`

const Tr = styled.tr`
background-color:white;
`

const Table = styled.table`
width:60%;

${Tr}:nth-child(even){
    background-color:#ffe6e6;
}
${Tr}:nth-child(1){

    ${Td}{
        font-weight:bold;
        font-size: larger;
}
`


class ProgressPercentage extends Component {
    render() {
        let table = <Spinner />;
        if (this.props.labsDetails.length !== 0) {
            const labs = this.props.labsDetails.sort((lab1, lab2) => (lab1.name > lab2.name) ? 1 : -1);
            const labsInTable = labs.map(lab =>
                <Tr key={lab.id} >
                    <Td >{lab.name} </Td>
                    <Td >{(lab.status === "IN_PROGRESS") ? "IN PROGRESS" : lab.status} </Td>
                    <Td > {lab.progress_percentile} % </Td>
                </Tr>
            )
            table = <Table >
                <tbody>
                    <Tr >
                        <Td> Lab  </Td>
                        <Td > Status</Td>
                        <Td >Progress Percentile</Td>
                    </Tr>
                    {labsInTable}
                </tbody>
            </Table>
        }


        return (
            <Card >
                {table}
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