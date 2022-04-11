import React from 'react'
import { useForm } from './../../hooks/useForm';
import { HeroCard } from './../hero/HeroCard';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'; // Para obtener los parametros de la url
import { getHeroesByName } from './../../selectors/getHeroesByName';
import { useMemo } from 'react';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({ searchText: q, });

    const { searchText } = values;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1> Búsquedas</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
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
                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className='alert alert-info'>Buscar un héroe</div>
                            : (heroesFiltered.length === 0) && <div className='alert alert-danger'>No hay resultados: {q}</div>

                    }
                    {
                        heroesFiltered.map(hero => (<HeroCard
                            key={hero.id}
                            {...hero}
                        ></HeroCard>))
                    }
                </div>
            </div>
        </>
    )
}
