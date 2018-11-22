import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem component', () => {
    it('have class "list-item"', () => {
        const wrap = shallow(<ListItem />);
        expect(wrap.find('.list-item').exists()).toEqual(true);
    });
});
