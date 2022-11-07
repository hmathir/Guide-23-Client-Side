import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';

const PrivateRoute = ({childred}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation();
    
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return childred;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;