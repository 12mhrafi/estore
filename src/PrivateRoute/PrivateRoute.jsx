import React, { useContext } from 'react'
import { AuthContext } from './../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <div className='w-screen h-screen justify-center items-center flex'>
             <h2 >Loading...</h2>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
}

export default PrivateRoute