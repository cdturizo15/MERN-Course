import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({children}) => {
    const {state} = useContext(AuthContext)
    const {pathname} = useLocation()
    const lastpath = pathname
    localStorage.setItem('lastPath', lastpath)
  return (state.logged) 
  ? children 
  : <Navigate to="/login"></Navigate>
  
}
