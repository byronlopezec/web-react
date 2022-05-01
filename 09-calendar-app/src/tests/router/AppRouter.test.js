import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom'
import { AppRouter } from './../../router/AppRouter';

const mockStore = configureStore([thunk]);

const initialState = {
    auth: {
        checking: false,
    }
}
const store = mockStore(initialState);
// store.dispatch = jest.fn();

describe('Pruebas en <AppRouter />', () => {


    test('debe de motrar el espere...', () => {

        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>)

        expect(wrapper).toMatchSnapshot();

    });
});