import { createContext, useState } from 'react';

const UserContext = createContext(null);

const ContextProvider = ({children})=>{
    const [valoresUser,SetUser] = useState()
    //{email:"joseluis",toDoList:[{title:"aaaaa",id:"1",ExpDate:"2001/11/11"},{title:"bbbbbb",id:"12",ExpDate:"2001/11/20"},{title:"cccccc",id:"13",ExpDate:"2001/09/21"}]}
    return (
        <UserContext.Provider value={{valoresUser,SetUser}}>
            {children}
        </UserContext.Provider>
    );
};
export {ContextProvider , UserContext};
