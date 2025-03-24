import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState();
      const [isLoggedIn, setIsLoghgedIn] = useState(false);

    const storedUser = JSON.parse(localStorage.getItem('user'))

    // function LoggedOutUser(){
        


    // }

    

    
  return (
    <div>
<AuthContext.Provider value={{loggedUser,setLoggedUser,isLoggedIn,setIsLoghgedIn,storedUser }}>
    {children}
</AuthContext.Provider>

    </div>
  )
}

export default AuthProvider