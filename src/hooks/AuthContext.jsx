import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null);
      const [isLoggedIn, setIsLoghgedIn] = useState(false);

    const storedUser = JSON.parse(localStorage.getItem('user'))

    const logIn = (userData) =>{
      setLoggedUser(userData)
      setIsLoghgedIn(true);
    }

    const logOut = (userData) =>{
      setLoggedUser(null)
      setIsLoghgedIn(false)
    }

    

    
  return (
    <div>
<AuthContext.Provider value={{loggedUser,isLoggedIn,logIn,logOut }}>
    {children}
</AuthContext.Provider>

    </div>
  )
}

export default AuthProvider