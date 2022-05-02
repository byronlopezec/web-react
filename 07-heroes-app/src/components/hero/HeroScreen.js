import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHerosById } from './../../selectors/getHerosById';
import { heroImages } from './../../helpers/heroImages';

export const HeroScreen = () => {

    const navigate = useNavigate();
    // const params = useParams();
    const { heroid } = useParams();
    // Memorizar valores cuando los datos son muy grandes, para evitar volver a pedir valores,
    // si heroeId cambia, se vuelve a llamar a la funcion getHerosById
    const hero = useMemo(() => getHerosById(heroid), [heroid]);

    // const hero = getHerosById(heroeid);
    
    const handleReturn = () => {
        navigate(-1)
    }
    
    if (!hero) {
        // es mejor usar el componente Navigate que la funcion navigate('/')
        return <Navigate to='/' />
    }
    
    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={`/assets/heroes/${hero.id}.jpg `}
                    src={heroImages(`./${hero.id}.jpg`)}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
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
                    Regresar
                </button>
            </div>
        </div>
    )
}
