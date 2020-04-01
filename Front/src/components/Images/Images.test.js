import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Images from './Images';
import Image from './image/image';

configure({ adapter: new Adapter() });

describe('<Images/>', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Images />);
    });

    it('should render 2 images', () => {
        expect(wrapper.find(Image)).toHaveLength(2);
    });

});