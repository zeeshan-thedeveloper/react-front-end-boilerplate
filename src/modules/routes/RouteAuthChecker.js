import { Navigate } from 'react-router';
export const RouteAuthChecker = ({ path, authenticationPath, component }) => {
    if (path === '/auth') {
        if (!localStorage.getItem('access_token')) {
            return component;
        } else {
            return <Navigate to={{ pathname: '/dashboard' }} />;
        }
    } else {
        if (localStorage.getItem('access_token')) {
            return component;
        } else {
            return <Navigate to={{ pathname: authenticationPath }} />;
        }
    }
}