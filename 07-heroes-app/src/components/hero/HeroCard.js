import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from './../../helpers/heroImages';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img
                            // src={`/assets/heroes/${id}.jpg`}
                            src={heroImages(`./${id}.jpg`)}
                            className='card-img' alt={superhero} />
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'> {superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters) && <p className='text-muted'>{characters}</p>
                            }
                            <div className='text-card'>
                                <p className='text-muted'>{first_appearance}</p>
                            </div>

                            <Link to={`/hero/${id}`}>Mas..</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
