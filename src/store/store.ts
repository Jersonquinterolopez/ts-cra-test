import { createContext } from 'react'

const initialState = {
    firstName: 'Jack',
    lastName: 'Doe',
};

export type UserState = typeof initialState; 

const context = createContext<typeof initialState>(initialState);

export default context;