import React from 'react';
import  {mount}  from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom'
import { DeleteDeventFab } from '../../../components/ui/DeleteDeventFab';
import { eventStartDelete } from '../../../components/actions/events';

const mockStore = configureStore([thunk]);

const initialState = {}
const store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <DeleteDeventFab />
    </Provider>
)

jest.mock('./../../../components/actions/events', () => ({ 
    eventStartDelete: jest.fn()
 }))


describe('Pruebas en <DeleteEventFav />.', () => {


    test('debe de motrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe llamar el eventStartdelete al hacer click', () => {

  
        wrapper.find('button').prop('onClick')();
        
        expect(eventStartDelete).toHaveBeenCalled();

    });
});