import { createRootRoute, createRoute, createRouter, RouterProvider, Outlet } from '@tanstack/react-router';
import { Home } from '../pages/home/Home.tsx';
import { Login } from '../pages/login/Login.tsx';
import { Account } from '../pages/account/Account.tsx';

const rootRoute = createRootRoute({
    component: () => (
        <div>
            <h1>React Test App</h1>
            <Outlet />
        </div>
    ),
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: Login,
});

const accountRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/account',
    component: Account,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute, accountRoute]);

export const router = createRouter({
    routeTree,
});

export const Routes = () => <RouterProvider router={router} />;