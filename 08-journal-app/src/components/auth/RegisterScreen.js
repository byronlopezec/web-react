import { Link } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

    // {
    //     name: 'Brandom',
    //     email: 'brandom@gmail.com',
    //     password: '123456',
    //     password2: '123456'
    // }

    const [formValues, handleInputChange] = useForm({
        name: 'Brandom',
        email: 'brandom@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            console.log('Form is valid');
        } else {

        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {

            return false
        } else if (validator.isEmail(email)) {
            return false
        } else if (password !== password2 && password.length < 5) {

            return false;
        }
        return true
    }
    return (
        <>
            <h3 className="auth_title">Register</h3>
            <form onSubmit={handleRegister}>

                <div className='auth__alert-error'>
                    <p>Mensaje de error</p>
                </div>


                <input className="auth__input"
                    autoComplete='off'
                    type="text" placeholder="Name" name="name"
                    value={name}
                    onChange={handleInputChange}
                />

                <input className="auth__input"
                    autoComplete='off'
                    type="email" placeholder="Email" name="email"
                    value={email}
                    onChange={handleInputChange}
                />

                <input className="auth__input"
                    autoComplete='off'
                    type="password" placeholder="Password" name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <input className="auth__input"
                    autoComplete='off'
                    type="password2" placeholder="Confirm Password" name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button className='btn btn-primary btn-block mb-5'
                    type="submit" disabled={false}>Register</button>

                <Link className='link' to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </>
    )
}
