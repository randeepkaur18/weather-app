import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SearchBar />);
    })

    it('should have class ".searchBar"', () => {
        expect(wrapper.exists('.searchBar')).toEqual(true);
    });

    it('should render two <span> elements', () => {
        expect(wrapper.find('span')).toHaveLength(2);
    });

    it('should render one <input> element', () => {
        expect(wrapper.find('input').exists()).toBe;
    });

    it('should render two <i> elements', () => {
        expect(wrapper.find('i')).toHaveLength(2);
    });

    it('check whether function executes or not on the click of search icon', () => {
        const clicked = jest.fn();
        wrapper = shallow(<SearchBar clicked={clicked} />)
        wrapper.find('.searchIcon').simulate('click');
        expect(clicked).toHaveBeenCalled();
    });   

})