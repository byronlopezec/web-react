import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Byron',
        email: 'byron@gmail.com'
    }

    // Mount me vizualiza todo el componente cargado, el shallow solo renderiza el componente
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />  
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    
})
