import {createBrowserRouter, Navigate} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import UserPages from './pages/UserPages';
import PostPages from './pages/PostPages';
import UserDetailsPages from './pages/UserDetailsPages';

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to="/users"/>,
            },
            {
                path: '/users', element: <UserPages/>, children: [
                    {
                        path: ':id', element: <UserDetailsPages/>,
                    },
                ],
            },
            {
                path: '/posts', element: <PostPages/>,
            },
        ],
    },
]);

export {
    router,
};