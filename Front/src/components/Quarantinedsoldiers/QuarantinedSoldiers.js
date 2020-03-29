import React from 'react';
import { connect } from 'react-redux';

import './QuarantinedSoldiers.css';
import Card from '../../hoc/Card/Card'

const QuarantinedSoldiers = (props) => {
    return (
        <div>
            <Card >
                <ul className="quarantinedSoldiers">
                    <p className="quarantinedSoldiers"><strong> Quarantined soldiers: </strong></p>
                    {props.quarantinedSoldiersNames.map((person) =>
                        (<li className="quarantinedSoldier" key={person.id} >{person.name} </li>))}
                </ul>
            </Card>
            <Card className="soldiersAtHome" style={{ height: '100px' }}>
                <p className="soldiersAtHome"><strong> Number of soldiers at home:</strong> {props.soldiersAtHome}</p>
            </Card>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        quarantinedSoldiersNames: state.soldiers.quarantinedSoldiers
    };
};

export default connect(mapStateToProps)(QuarantinedSoldiers);