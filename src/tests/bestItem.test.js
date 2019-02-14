import React from 'react';
import BestItem from '../components/bestItem';
import {shallow} from 'enzyme';

describe('Testing <BestItem/>', () => {
    const item = shallow(<BestItem/>);
    describe('testing shap & state ', () =>{
        it('BestItem have rendered correctly', () => {
            expect(item).toMatchSnapshot();
        })
    });
})