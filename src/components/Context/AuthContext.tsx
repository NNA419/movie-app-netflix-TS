// import { createContext, useReducer } from "react";

import { createContext, useReducer } from "react";


type User = { email: string };

type State = { user: User | null };

type Action = {
    type: "LOGIN_SUCCESS";
    payload: {
        user: User;
    }
} | { type: "LOGOUT" };

type Dispatch = (action: Action) => void;

const initial = { user: null };

// const LOGIN_SUCCESS = "LOGIN_SUCESS";

const AuthContext =
    createContext
    <{
        state: State,
        login: (data: { email: string }) => void
    }>
        ({ state: initial, login: () => { } });

function reduce(state : State, action : Action) : State { 
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log(action);
             return { ...state, user: action.payload.user };
      default:
        return state;
    }
}

const AuthProvider = ({ children } : {children: React.ReactNode}) => {

    const [state, dispatch] = useReducer(reduce, initial);
    console.log(state);

    const login = async (data : {email : string}) => {
        console.log(data)
        dispatch({ type : "LOGIN_SUCCESS", payload: {user: {email : data.email}} })
    }

    return (
    <AuthContext.Provider value={{ state, login }}>
        {children}
    </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider }