import React from 'react';

import './QuarantinedSoldiers.css';
import Card from '../../hoc/Card/Card'

const QuarantinedSoldiers = (props) => {
    const names = props.quarantinedSoldiersNames.map((person) => {
        return <li className="quarantinedSoldier" key={person.id} >{person.name} </li>
    })

    return (
        <div>
            <Card >
                <ul className="quarantinedSoldiers">
                    <p className="quarantinedSoldiers"><strong> Quarantined soldiers: </strong></p>
                    {names}
                </ul>
            </Card>
            <Card className="soldiersAtHome" style={{ height: '100px' }}>
                <p className="soldiersAtHome"><strong> Number of soldiers at home:</strong> {props.soldiersAtHome}</p>
            </Card>
        </div>

    )
}

export default QuarantinedSoldiers;