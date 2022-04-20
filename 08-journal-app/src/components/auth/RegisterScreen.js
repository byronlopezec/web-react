import { Link } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

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
            dispatch(startRegisterEmailPassword(name, email, password));
        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false
        } else if (password !== password2) {
            dispatch(setError('Password not matched'));
            return false;
        } else if (password.length < 5) {
            dispatch(setError('Password must be at least 6 characters'));
            return false;
        }

        dispatch(removeError());
        return true
    }



    return (
        <>
            <h3 className="auth_title">Register</h3>
            <form className='animate__animated animate__fadeIn animate__faster' onSubmit={handleRegister}>

                {
                    msgError &&
                    <div className='auth__alert-error'>
                        <p>{msgError}</p>
                    </div>
                }


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
                    type="password" placeholder="Confirm Password" name="password2"
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
