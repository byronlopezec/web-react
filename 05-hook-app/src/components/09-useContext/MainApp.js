// Página principal

import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const user = {
        if: 1234,
        name: "Byron López",
        email: "byron.lopez@gmail.com"
    }
    return (
        // todo lo que ponga en el value 
        //será accedido por todo lo que se encuentre dentro de mi userContext
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    )
}
