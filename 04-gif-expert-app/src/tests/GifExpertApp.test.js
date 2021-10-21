import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp.js'
describe('Probar componente ExpertAPP', () => {

    test('debería mostrarse el componente GitExpertApp', () => {
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball']

        const wrapper = shallow(<GifExpertApp defaultCatagories={categories} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(2);

    })


})

