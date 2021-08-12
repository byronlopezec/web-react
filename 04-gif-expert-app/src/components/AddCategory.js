import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Ingrese texto');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            setCategories(categories => [...categories, inputValue])
            setInputValue('');
        }
    }

    return (
        // <> no es necesario el fragment ya que form sirve de fragmentador o agrupador
        <form onSubmit={handleSubmit}>
            {/* <h2>{inputValue}</h2> */}
            <input type='text' value={inputValue} onChange={handleInputChange}></input>
        </form>
        // </>
    )


}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
