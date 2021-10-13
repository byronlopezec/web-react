import React from 'react';

import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';


describe('Probar componentes', () => {
    const title = "titulo prueba"
    const url = "https://localhost.com"
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe mostrar <GifGridItem/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual a la url y el title', () => {
        const img = wrapper.find('img');
        expect(img.prop('alt')).toBe(title)
        expect(img.prop('src')).toBe(url)
    })

    test('debe tener animate flhas_in', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')

        expect(className.includes('animate__fadeIn')).toBe(true);
    })


})

