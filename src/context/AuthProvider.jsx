import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState({})
  // create new user
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login new user
    const loginUser = (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logOut = ()=>{
      return signOut(auth)
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
          setUser(currentUser)
          return ()=>{
            unsubscribe()
          }
      })
    },[])
    const authInfo = {
      createUser,
      loginUser,
      logOut,
      user,
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider
