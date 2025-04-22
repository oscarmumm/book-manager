import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../contexts/UserContext';

type Role = 'admin' | 'user'

type ProtectedRouteProps = {
    children: ReactNode;
    allowedRoles: Role[];
};

export const ProtectedRoute = ({
    children,
    allowedRoles,
}: ProtectedRouteProps) => {
    const userContext = useContext(UserContext);
    if (!userContext) return null;
    const { userData } = userContext;

    if (!userData) {
        return <Navigate to='/' replace />;
    }
    if (allowedRoles && !allowedRoles.includes(userData.role)) {
        return <Navigate to='/unauthorized' replace />;
    }

    return children;
};
