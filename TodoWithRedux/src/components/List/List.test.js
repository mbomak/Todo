import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('ListItem component', () => {
    it('have class "list"', () => {
        const wrap = shallow(<List />);
        expect(wrap.find('.list').exists()).toEqual(true);
    });
});
