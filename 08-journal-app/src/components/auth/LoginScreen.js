import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from './../../hooks/useForm';
import { login, startLoginEmailPassword } from './../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch(); // darle acceso al dispatch

    const [values, handleInputChange] = useForm({
        email: 'byron@gmail.com',
        password: '123456'
    })


    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    return (
        <>
            <h3 className="auth_title">Login</h3>

            <form onSubmit={handleLogin}>
                <input className="auth__input"
                    autoComplete='off'
                    type="text" placeholder="email" name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input className="auth__input"
                    autoComplete='off'
                    type="password" placeholder="Password" name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <button className='btn btn-primary btn-block'
                    type="submit" disabled={false}>Login</button>

                <div className='auth__social-networks'>
                    <p>Login with Social networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className='link' to="/auth/register">
                    Create new account
                </Link>
            </form>
        </>
    )
}
