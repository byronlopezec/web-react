
import { useMemo } from 'react';
import { getHeroesByPublisher } from './../../selectors/getHerosByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    // useMemo para evitar traer la misma información
    // const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (<HeroCard key={hero.id} {...hero}>{hero.superhero}</HeroCard>))
            }
        </div>
    )
}
