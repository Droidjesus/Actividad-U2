import { useEffect, useReducer } from "react"
interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

type LoginPayLoad = {
    username: string,
    nombre: string
}

type AuthAction = | {type: 'logout'} | {type: 'login', payload: LoginPayLoad};


const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

//type AuthAction = {type: 'logout'}
const authReducer = (state: AuthState, action: AuthAction): AuthState =>{
    switch(action.type){
        case 'logout':
            return{
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return{
                validando: false,
                token: 'MITOKEN1234567890',
                username,
                nombre,
            }
            break;
        default:
            return state;
            break;
    }
}

export const Login = () =>{
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() =>{
        setTimeout(() => {
            dispatch({type:'logout'})
        }, 2500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'Jesus',
                nombre: 'Jesus'
            }
        })
    }
    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    
    if(state.validando){
        return(
            <>
                <h3>Login</h3>
                    <div className="ficAlertInfo_Div">
                        Validando Informacion...
                    </div>
            
            </>
        )
    }
    return(
        <>
            <h3>Login</h3>
            {
                (state.token) ? (
                    <div className="ficAlertSuccess_Div">
                        Autenticado como: {state.nombre}
                    </div>
                ) : (
                    <div className="ficAlertDanger_Div">
                        No Autenticado...
                    </div>
                )}{( state.token) ? (   
                    <button className="ficLogout_Button" onClick={logout}>
                            Logout
                    </button>
                ) : (
                    <button className="ficLogin_Button" onClick={login}>
                            Login
                    </button>
                )}
        </>
    )
}
