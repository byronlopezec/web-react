import React from 'react'
import { useForm } from './../../hooks/useForm';

export const SearchScreen = () => {

    const [values, handleInputChange] = useForm({ searchText: '', });

    const { searchText } = values;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
    }
    return (
        <>
            <h1> Búsquedas</h1>
            <hr />

            <div className='row'>
                <h4>Buscar</h4>
                <hr />

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder='Buscar Héroe'
                        className='form-control'
                        name="searchText"
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange} />

                    <button className='btn btn-outline-primary mt-1'
                        type='submit'>
                        Buscar...
                    </button>
                </form>
            </div>
        </>
    )
}
