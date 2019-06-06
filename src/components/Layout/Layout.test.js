import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';
import Header from '../Header/Header';
import MainContainer from '../../containers/MainContainer/MainContainer';

describe('<Layout />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout />);
    })

    it('should have one <Header> component', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('should have one <MainContainer> component', () => {
        expect(wrapper.find(MainContainer)).toHaveLength(1);
    });

    it('should have class ".layout"', () => {
        expect(wrapper.exists('.layout')).toEqual(true);
    });   

})