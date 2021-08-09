import React from 'react';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba de CounterApp', () => {


    test('debe mostrar <CounterApp/> correctamente', () => {
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto', () => {

        const wrapper = shallow(<CounterApp value={100} />);

        const valorCounter = wrapper.find('#idCounter').text();

        expect(valorCounter).toBe("100");

    })


})
