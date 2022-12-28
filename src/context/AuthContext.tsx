import { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Defenir que información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favouriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
}

// Lo usuararemos para dicer a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn:()=> void;
    changeFavouriteIcon: (iconName: string) => void;
    logout: ()=> void;
    changeUsername: ( userName: string ) => void;
}


// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps );

// Componente el proveedor del estado
export const AuthProvider = ({ children } : any ) => {

    const [ authState, dispatch] = useReducer( authReducer, authInitialState );

    const signIn = () => {
        dispatch( { type: 'singIn' });
    }

    const changeFavouriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    }

    const logout = () => {
        dispatch( { type: 'logout' });
    }

    const changeUsername= ( userName: string ) => {
        dispatch( { type: 'changeUsername', payload: userName });
    }
    
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavouriteIcon,
            logout,
            changeUsername,

        }}>
            { children }
        </AuthContext.Provider>
    )
}