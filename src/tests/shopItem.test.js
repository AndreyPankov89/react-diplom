import React from 'react';
import ShopItem from '../components/shopItem';
import {shallow} from 'enzyme';

describe('Testing <ShopItem/>', () => {
    const item = shallow(<ShopItem/>);
    describe('testing shap & state ', () =>{
        it('ShopItem have rendered correctly', () => {
            expect(item).toMatchSnapshot();
        })
    });
})