import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
import GifGrid from '../../components/GifGrid';
import { useFectchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Probar componente add category', () => {

    const category = 'One punch';

    test('deberia mostrar el componente GifGrid', () => {
        useFectchGifs.mockReturnValue({
            data: [], loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar items cuando se cargan imageenes de usefetchGifs', () => {

        const gifs = [{
            id: 1,
            url: 'http.localhost.com/image1.png',
            title: 'imagen 1'
        }];
        useFectchGifs.mockReturnValue({
            data: gifs, loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot()

    })


})
