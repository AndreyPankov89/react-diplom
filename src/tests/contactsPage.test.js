import React from 'react';
import ContactsPage from '../components/pages/contactsPage'; 
import {shallow, mount} from 'enzyme';

describe('Testing <ContactsPage/>', () => {
    const item = shallow(<ContactsPage/>);
    const mountItem=mount(<ContactsPage/>);
    describe('testing shap & state ', () =>{
        it('ContactsPage have rendered correctly', () => {
            expect(item).toMatchSnapshot();
        })
    });
    describe('Handlers tests', () => {
        // it('testing onClick', async () => {
        //     await item.instance().onClick(); 
        //     expect(item.state().loading).toBeFalsy();
        //     expect(item.state().thanks).toBeTruthy();
        // });
        it('testing returnBack', () => {
            item.instance().returnBack();
            expect(item.state().thanks).toBeFalsy();
        });

        it('testing post', ()=> {
            mountItem.setState({name: "Andrey", email:'test@test.ru',message:'Message'});
            expect(mountItem.state().name).toBe('Andrey');
            expect(mountItem.state().email).toBe('test@test.ru');
            expect(mountItem.state().message).toBe('Message');
            mountItem.find('#send').simulate('click');
            expect(mountItem.state().validateErrors.length).toBe(0);

        })
        
    })
})