import Swal from 'sweetalert2'


import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types'
import { finishLoading, startLoading } from './ui';

// Crear acción asincrona
export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {

        dispatch(startLoading())
    
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch(login( user.uid, user.displayName ))
                
                dispatch(finishLoading())
            })
            .catch( e => {
                console.log(e);
                dispatch(finishLoading())
                Swal.fire('Error', e.message, 'error')
            })

    }
}

// Inicio de registro
export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( e => {
                Swal.fire('Error', e.message, 'error')
            })

    }
}

// Accion de Google
export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

// Accion de auth (es una función)
export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })

// Accion asincrona para Logout.

export const startLogout = () =>{
    return async(dispatch) => {
        await firebase.auth().signOut()
        
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})

