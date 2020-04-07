import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import reducer from './labs';


describe('labs reducer', () => {
    it('should rerutrn the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            cureFound: false,
            labsDetails: []
        })
    })
})