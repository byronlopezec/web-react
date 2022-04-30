import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
import { AddCategory } from '../../components/AddCategory'

describe('Probar componente add category', () => {

    const setCategories = jest.fn(); // jest.fn() nos permite saber cuando, como y cuantas veces fue llamado la funcion () => { };
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('deberia mostrar el componente addcategory', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('deberia cambiar la entrada de texto', () => {

        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    })

    test('No debe realizar POST sin hacer submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto: ', () => {
        //1. simular el inputvalue
        const value = 'hola mundo';
        wrapper.find('input').simulate('change', { target: { value } });

        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        //3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //4. el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    })


})
