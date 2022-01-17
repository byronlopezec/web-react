import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHerosById } from './../../selectors/getHerosById';

export const HeroScreen = () => {

    const [counter, setCounter] = useState(0);

    const navigate = useNavigate();
    // const params = useParams();
    const { heroeid } = useParams();
    // Memorizar valores cuando los datos son muy grandes, para evitar volver a pedir valores
    const hero = useMemo(() => getHerosById(heroeid), [heroeid]);


    // const hero = getHerosById(heroeid);

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
    const imagePath = `/assets/heroes/${hero.id}.jpg `

    if (!hero) {
        // es mejor usar el componente Navigate que la funcion navigate('/')
        return <Navigate to='/' />
    }

    const handleReturn = () => {
        // navigate(-1)
        setCounter(counter + 1)
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={imagePath}
                    alt={superhero}
                    className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3> {superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b>{alter_ego}</li>
                    <li className="list-group-item">  <b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"> <b>First Appearance</b>{first_appearance}</li>
                </ul>

                <h5>Characteres</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info"
                    onClick={handleReturn}>
                    Regresar {counter}
                </button>
            </div>
        </div>
    )
}
