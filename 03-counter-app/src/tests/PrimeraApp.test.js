import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Prueba de PrimeraAPP', () => {
    test('Debe mostrar el mensaje Hola Soy Gokuw', () => {
        const saludo = "Hola Soy Goku";
        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    })

})
