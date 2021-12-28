// Página principal

import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});


    return (
        // todo lo que ponga en el value 
        //será accedido por todo lo que se encuentre dentro de mi userContext
        <UserContext.Provider value={{ user, setUser}}>
            <AppRouter />
        </UserContext.Provider>
    )
}
