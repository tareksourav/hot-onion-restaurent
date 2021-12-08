import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth"


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div>Data is loading</div>
    }
    return user.email ?
        children :
        <Navigate to="/login" />
};
export default PrivateRoute;