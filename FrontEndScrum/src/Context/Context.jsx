import { createContext, useState } from 'react';

const UserContext = createContext(null);

const ContextProvider = ({children})=>{
    const [valoresUser,SetUser] = useState()
    return (
        <UserContext.Provider value={{valoresUser,SetUser}}>
            {children}
        </UserContext.Provider>
    );
};
export {ContextProvider , UserContext};
