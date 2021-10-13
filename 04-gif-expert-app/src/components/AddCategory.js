import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Ingrese texto');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

        console.log('handleInputChange changed')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('handleSubmit')

        if (inputValue.trim().length > 1) {
            setCategories(categories => [inputValue, ...categories])
            setInputValue('');
        }
    }

    return (
        // <> no es necesario el fragment ya que form sirve de fragmentador o agrupador
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            {/* <h2>{inputValue}</h2> */}
            <input type='text' value={inputValue} onChange={handleInputChange}></input>
        </form>
        // </>
    )


}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
