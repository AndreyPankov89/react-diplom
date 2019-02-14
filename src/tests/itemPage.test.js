import React from 'react';
import ItemPage from '../components/pages/itemPage'; 
import {shallow} from 'enzyme';

describe('Testing <ItemPage/>', () => {
    const item = shallow(<ItemPage/>);
    describe('testing shap & state ', () =>{
        it('ItemPage have rendered correctly', () => {
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
        it('testing onSpoilClick', () => {
            item.instance().onSpoilClick();
            expect(item.state().short).toBeFalsy();
        });
        
    })
})