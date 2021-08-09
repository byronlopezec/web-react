import React from 'react';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Prueba de PrimeraAPP', () => {
    // test('Debe mostrar el mensaje Hola Soy Gokuw', () => {
    //     const saludo = "Hola Soy Goku";
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el subitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

        const textoParrafo = wrapper.find('#idSubtitulo').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);

    })


})
