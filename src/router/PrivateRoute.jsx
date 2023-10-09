import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import PropTypes from "prop-types"
const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    if(user){
        return children
    } else{
        return <Navigate to="/"></Navigate>
    }
 
}
PrivateRoute.propTypes = {
    children:PropTypes.node
}
export default PrivateRoute
