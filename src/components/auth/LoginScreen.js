import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    // Hook de REDUX
    const dispatch = useDispatch()

    // Selector
    const {loading} = useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        email: 'hudini@gmail.com',
        password: '123456'
    })

    const {email, password} = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email, password))
    }

    // Método de la accion al boton de Google

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>

                <input className="auth__input" 
                        type="text" 
                        placeholder="Email" 
                        name="email" 
                        autoComplete="off" 
                        value = {email} 
                        onChange={handleInputChange}>
                </input>

                <input className="auth__input" 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value = {password} 
                        onChange={handleInputChange}>
                </input>

                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>Login</button>

                <hr></hr>
                <div className="auth__social-network">
                    <p>Login with social networks</p>

                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create new account
                </Link>

            </form>
        </div>
    )
}
