import {createBrowserRouter, Navigate} from 'react-router-dom';

import {MainLayout} from './layout';
import {CarPages, LoginPages, RegisterPages} from './pages';

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'login'}/>,
            },
            {
                path: 'cars', element: <CarPages/>,
            },
            {
                path: 'login', element: <LoginPages/>,
            },
            {
                path: 'register', element: <RegisterPages/>,
            },
        ],
    },
]);