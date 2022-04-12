
import { Link } from 'react-router-dom';
export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth_title">Register</h3>
            <form>
                <input className="auth__input"
                    autoComplete='off'
                    type="text" placeholder="Name" name="name" />
               
                <input className="auth__input"
                    autoComplete='off'
                    type="password" placeholder="Password" name="password" />
               
                <input className="auth__input"
                    autoComplete='off'
                    type="password" placeholder="Confirm Password" name="password2" />

                <button className='btn btn-primary btn-block mb-5'
                    type="submit" disabled={true}>Login</button>

                <Link className='link' to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </>
    )
}
