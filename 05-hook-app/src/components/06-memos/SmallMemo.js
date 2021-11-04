import React, { memo } from 'react'

// memo nos permite ejecutar el componente solo si sus props cambian
// así evitamos llamar varias peticiones http
export const SmallMemo = memo(({value}) => {
    console.log('Me volví a llamar!!');
    return (
        <small>{value}</small>
    )
})
