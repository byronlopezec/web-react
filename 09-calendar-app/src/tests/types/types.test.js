import { types } from '../../types/types';



describe('Pruebas en Types', () => {
    
    test('los types deben de ser iguales', () => {

        expect( types ).toEqual({

            uiOpenModal: '[UI] Open Modal',
            uiCloseModal: '[UI] Close Modal',
        
            eventSetActive: '[Event] Set Active',
            eventLogout: '[Event] Logout',
        
            eventSetTentative: '[Event] Set Tentative',
            eventStartAddNew: '[Event] Start Add New',
            eventAddNew: '[Event] Add New',
            eventClearActiveEvent: '[Event] Clear Active Event',
            eventUpdate: '[Event] Update',
            eventDelete: '[Event] Delete',
            eventLoaded: '[Event] Loaded',
        
            authChecking: '[Auth] Checking login state',
            authCheckingFinish: '[Auth] Checking login state finish',
            authStartLogin: '[Auth] Start login',
            authLogin: '[Auth] Login',
            authStartRegister: '[Auth] Start register',
            authStartTokenRenew: '[Auth] Start token renew',
            authLogout: '[Auth] Logout',
        
        })

        
    })
    


})
