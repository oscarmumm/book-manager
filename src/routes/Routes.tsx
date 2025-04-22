import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Unauthorized from '../pages/Unauthorized';
import { ProtectedRoute } from './ProtectedRoute';
import Profile from '../pages/Profile';
import Books from '../pages/Books';
import Users from '../pages/Users';
import Loans from '../pages/Loans';

const publicRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/unauthorized',
        element: <Unauthorized />,
    },
];

const userRoutes = [
    {
        path: '/profile',
        element: (
            <ProtectedRoute allowedRoles={['admin', 'user']}>
                <Profile />
            </ProtectedRoute>
        ),
    },
];

const adminRoutes = [
    {
        path: '/books',
        element: (
            <ProtectedRoute allowedRoles={['admin']}>
                <Books />
            </ProtectedRoute>
        ),
    },
    {
        path: '/users',
        element: (
            <ProtectedRoute allowedRoles={['admin']}>
                <Users />
            </ProtectedRoute>
        ),
    },
    {
        path: '/loans',
        element: (
            <ProtectedRoute allowedRoles={['admin']}>
                <Loans />
            </ProtectedRoute>
        ),
    },
];

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            {publicRoutes.map(({ path, element }) => (
                <Route path={path} element={element} />
            ))}
            {/* User Routes */}
            {userRoutes.map(({ path, element }) => (
                <Route path={path} element={element} />
            ))}
            {/* Admin Routes */}
            {adminRoutes.map(({ path, element }) => (
                <Route path={path} element={element} />
            ))}
        </Routes>
    );
};
