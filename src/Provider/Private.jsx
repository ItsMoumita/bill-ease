import React from 'react';
import { AuthContext } from './AuthProvider';


const Private = ({ children }) => {
    const { user, loading } = React.useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>
    }

    if (user) {
        return children;
    }
    return <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Please login to view this page</h1>
    </div>
}