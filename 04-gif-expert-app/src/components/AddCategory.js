import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const    AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

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
