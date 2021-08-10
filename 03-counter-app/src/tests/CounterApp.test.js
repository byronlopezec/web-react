import React from 'react';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba de CounterApp', () => {

    // puedo dejarlo "let wrapper;" pero el inteligense de "visual code" no funciona
    let wrapper = shallow(<CounterApp />);

    // reiniciar cada test el componente
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto', () => {

        const wrapper = shallow(<CounterApp value={100} />);

        const valorCounter = wrapper.find('#idCounter').text().trim();

        expect(valorCounter).toBe("100");

    })

    test('deberia aumentar 1 al hacer click en el boton plus', () => {

        const valorCounter = parseInt(wrapper.find('#idCounter').text().trim()); //100
        wrapper.find('#btnPlus').simulate('click'); //+1
        const valueAfterClickPlus = parseInt(wrapper.find('#idCounter').text().trim()); //101

        const valueCounterNew = (valueAfterClickPlus - 1);
        expect(valorCounter).toBe(valueCounterNew);

    })


    test('deberia reducir 1 al hacer click en el boton btnSubtract', () => {

        const valorCounter = parseInt(wrapper.find('#idCounter').text().trim()); //100
        wrapper.find('#btnSubtract').simulate('click'); //-1
        const valueAfterClickSubtract = parseInt(wrapper.find('#idCounter').text().trim()); //99

        const valueCounterNew = (valueAfterClickSubtract + 1);
        expect(valorCounter).toBe(valueCounterNew);

    })

    test('deberia reiniciar el valor por defecto con btn reset', () => {

        const value = wrapper.find('#idCounter').text().trim();

        wrapper.find('#btnSubtract').simulate('click');
        wrapper.find('#btnSubtract').simulate('click');
        wrapper.find('#btnReset').simulate('click');

        const valueAfterModified = wrapper.find('#idCounter').text().trim();
        expect(value).toBe(valueAfterModified);
    })


})
