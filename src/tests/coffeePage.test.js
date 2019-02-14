import React from 'react';
import CoffeePage from '../components/pages/coffeePage';
import {shallow} from 'enzyme';

describe('Testing <coffeePage/>', () => {
    const item = shallow(<CoffeePage/>);
    describe('testing shap & state ', () =>{
        it('BestItem have rendered correctly', () => {
            expect(item).toMatchSnapshot();
            
        })
    });
})