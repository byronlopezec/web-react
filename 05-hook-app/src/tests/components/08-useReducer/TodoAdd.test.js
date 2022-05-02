import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from './../../../components/08-useReducer/TodoAdd';

const handleTodoAdd = jest.fn();

describe('Pruebas en <TodoAdd />', () => {


    const wrapper = shallow(
        <TodoAdd
            handleTodoAdd={handleTodoAdd}
        />
    )



    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('NO debe de llamar handleTodoAdd', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault() { } });

        expect(handleTodoAdd).toHaveBeenCalledTimes(0);


    });

    test('debe de llamar la función handleTodoAdd', () => {

        const value = 'Aprender Firestore';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });

        expect(handleTodoAdd).toHaveBeenCalledTimes(1);
        expect(handleTodoAdd).toHaveBeenCalledWith(expect.any(Object)); // { }
        expect(handleTodoAdd).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });


        expect(wrapper.find('input').prop('value')).toBe('');

    })






})
