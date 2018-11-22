import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('ListItem component', () => {
    it('have tag header', () => {
        const wrap = shallow(<Header />);
        expect(wrap.type()).toEqual('header');
    });

    it('have tag h1', () => {
        const wrap = shallow(<Header />);
        expect(wrap.find('h1').exists()).toEqual(true);
    });
});
