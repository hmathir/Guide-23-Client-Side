import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation();
    
    if(loading){
        return <div className='flex justify-center h-screen items-center'><h1 className='font-bold text-xl'>Loading...</h1></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;