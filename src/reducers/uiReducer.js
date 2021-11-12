import { types } from "../types/types";

const initialState ={
    loading: false,
    msgError: null
}

export const uiReducer = (state = initialState, action) =>{
    
    switch ( action.type ) {
        case types.uiSetError:
            return{
                // Operador spread ...
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:
            return{
                // Operador spread ...
                ...state,
                msgError: null
            }

        case types.uiStartLoading:
            return{
                // Operador spread ...
                ...state,
                loading: true
            }
        
        case types.uiFinishLoading:
            return{
                // Operador spread ...
                ...state,
                loading: false
            }
           
        default:
            return state
    }
}