import React from 'react';
import './login.css';
import { useForm } from './../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from './../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [loginValues, handleLoginInputChange, reset] = useForm({
        lEmail: 'byron.lopez.begins@gmail.com',
        lPassword: '123456',
    });

    const { lEmail, lPassword } = loginValues;


    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>

                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                            />
                        </div>

                        <div className="input-group mb-3">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}