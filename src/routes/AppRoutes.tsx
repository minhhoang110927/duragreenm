import React from 'react';
import { Navigate, useRoutes, type RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import BlankPage from '../pages/BlankPage';


const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'products',
                element: <BlankPage title="Tất cả sản phẩm" />,
            },
            {
                path: 'circular-pro',
                element: <BlankPage title="Circular-Pro Products" />,
            },
            {
                path: 'why-duragreen',
                element: <BlankPage title="Why DuraGreen" />,
            },
            {
                path: 'projects',
                element: <BlankPage title="Projects" />,
            },
            {
                path: 'catalogue',
                element: <BlankPage title="Tài liệu Catalogue" />,
            },
            {
                path: 'contact',
                element: <BlankPage title="Contact Us" />,
            },
            {
                path: 'product-category/:categorySlug',
                element: <BlankPage title="Danh mục sản phẩm chi tiết" />,
            }
        ],
    },
    {
        path: '*',
        children: [
            { path: '404', element: <BlankPage title="404 - Trang không tồn tại" /> },
            { path: '*', element: <Navigate to="/404" replace /> },
        ],
    },
];

const AppRoutes: React.FC = () => {
    const element = useRoutes(routes);
    return element;
};

export default AppRoutes;