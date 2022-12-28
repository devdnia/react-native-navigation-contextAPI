# Context en React Native

En esta aplicación tiene implementada un contexto llamado AuthContext.tsx.  
La configuración realizada ha sido la siguiente:  

1. En el nivel más alta de nuestra APP crear nuestro Provider en nuestro caso AuthProvider.   
~~~
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (

    <NavigationContainer>
      <AppState>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children } : any ) => {

  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;`
~~~
2. Crear nuestro contexto en nuestro ejemplo es el AuthContext.tsx
~~~
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
~~~
3. Por último nustro reducer para llamar los métodos de nuestro AuthContext.tsx
~~~
import { AuthState } from './AuthContext';

type AuthActions = 
    | { type: 'singIn' }
    | { type: 'logout'}
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string }


export const authReducer = ( state: AuthState, action: AuthActions  ) : AuthState => {

    switch ( action.type ) {
        case 'singIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-username-yet'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favouriteIcon: action.payload
            }    
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favouriteIcon: undefined,
            }    
        case 'changeUsername':
            return{
            ...state,
            userName: action.payload
        }    

        default:
            return state;
    }

}
~~~
4. Para acceder al context desde cualquier compomente solo tenemos que utilizar el hook de useContext() pasando nuestro context y desectrurando lo que necesitemos.
~~~
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {

  const { signIn, authState: { isLoggedIn } } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>

      {
        !isLoggedIn && <Button title='SingIn' onPress={signIn} />
      }

    </View>
  )
}
~~~