import React from 'react';
import BestItems from '../components/bestItems';
import {shallow} from 'enzyme';

describe('Testing <BestItems/>', () => {
    const item = shallow(<BestItems/>);
    describe('testing shap & state ', () =>{
        it('BestItems have rendered correctly', () => {
            expect(item).toMatchSnapshot();
        })
    });
    describe('Handlers tests', () => {
        it('testing onitemSelected', async () => {
            await item.instance().loadItems(); 
            expect(item.state().loading).toBeFalsy();

        });
        it('testing onError', () => {
            item.instance().onError({message:"2"});
            expect(item.state().error).toBeTruthy();
            expect(item.state().loading).toBeFalsy();
            expect(item.state().errorCode).toBe('2')
        });
        
    })
})