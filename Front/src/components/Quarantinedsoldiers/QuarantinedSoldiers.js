import React, { useState } from 'react';

import './QuarantinedSoldiers.css';
import Card from '../../hoc/Card/Card'

function QuarantinedSoldiers(props) {

    const [quarantinedSoldiersNames] = useState(
        [
            { name: "Carmel dahan", id: 1 },
            { name: "Gal Cohen", id: 2 }
        ]
    )
    const [numberOfsoldiersAtHome] = useState(33);
    return (
        <div>
            <Card>
                <ul className="quarantinedSoldiers">
                    <p className="quarantinedSoldiers"><strong> Quarantined soldiers: </strong></p>
                    {quarantinedSoldiersNames.map((person) =>
                        (<li className="quarantinedSoldier" key={person.id} >{person.name} </li>))}
                </ul>
            </Card>
            <Card style={{ height: '100px' }}>
                <p className="soldiersAtHome"><strong> Number of soldiers at home:</strong> {numberOfsoldiersAtHome}</p>
            </Card>
        </div>

    )
}

export default QuarantinedSoldiers;