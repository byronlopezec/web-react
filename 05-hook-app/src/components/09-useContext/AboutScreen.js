import React from 'react'
import { useContext } from 'react/cjs/react.development';

import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user,setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({})// empty data logout
    }
    return (
        <div>
            <h1>About Screen</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button type="button" class="btn btn-primary"
                onClick={handleClick}>Logaout</button>
        </div>
    )
}
