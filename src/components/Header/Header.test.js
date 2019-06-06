import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {

    it('should have one <header> element', () => {
        let header = shallow(<Header />);
        expect(header.find('header')).toHaveLength(1);
    });

    it('should have text WEATHER APP in header', () => {
        let header = shallow(<Header />);
        expect(header.text()).toEqual("WEATHER APP");
    });

    it('should have class ".header"', () => {
        let header = shallow(<Header />);
        expect(header.exists('.header')).toEqual(true);
    });   

})