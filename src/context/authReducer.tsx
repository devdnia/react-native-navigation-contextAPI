import { ActionSheetIOS } from 'react-native';
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