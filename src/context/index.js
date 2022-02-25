import { createContext, useReducer, useState } from 'react'
import { reducer } from '../reducers'

export const UsersContext = createContext();

export default function UsersProvider({children}){
    const [ state, dispatch ] = useReducer(reducer, {
        userLiset:[],
        userDetails: {}
    });
    return (
        <UsersContext.Provider value={{state, dispatch}}>
            {children}
        </UsersContext.Provider>
    )
}