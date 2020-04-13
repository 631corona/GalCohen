import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Input } from '@material-ui/core';
import { rowDirectionCard as Card } from '../../hoc/Card/Card';
import './Auth.css';
import styled from 'styled-components';
import { SubmitButton } from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';

const Title = styled.p`
color: black;
font-family: 'Secular One', sans-serif;
font-weight: bold;
font-size:30px;
word-spacing: 7px;
letter-spacing: 3px;
`;

function Auth(props) {

    const [email, setEmail] = useState(
        { value: '' }
    )
    const [password, setPassword] = useState(
        { value: '' }
    )
    return <Card rowFlow={false}>
        <Title>LOG IN </Title>
        <Input
            className="MyInput"
            color="secondary"
            autoFocus
            placeholder="Email"
            value={email.value}
            onChange={event => setEmail({ value: event.target.value })}
        />
        <Input
            className="MyInput"
            color="secondary"
            placeholder="Password"
            value={password.value}
            onChange={event => setPassword({ value: event.target.value })}
        />
        <SubmitButton onClick={(event) => {
            event.preventDefault();
            props.onAuth(email.value, password.value);
        }} >Submit </SubmitButton>
    </Card>;
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: () => dispatch(actions.auth)
    };
};

export default connect(null, mapDispatchToProps)(Auth);