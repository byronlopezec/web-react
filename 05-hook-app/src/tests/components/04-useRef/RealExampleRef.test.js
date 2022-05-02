import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

let wrapper;
describe('Pruebas en <RealExampleRef />', () => {
    
    beforeEach( () => {
        wrapper = shallow( <RealExampleRef /> );

    } )

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);

    });

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    })
    

})
