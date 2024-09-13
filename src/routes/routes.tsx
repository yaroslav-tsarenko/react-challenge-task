import {
    createRootRoute,
    createRoute,
    createRouter,
    RouterProvider,
    Outlet,
} from "@tanstack/react-router";
import Home from "../pages/home/Home.tsx";
import {Login} from "../pages/login/Login.tsx";

const rootRoute = createRootRoute({
            component: () => (
                <div>
                    <h1>My App</h1>
        <Outlet />
        </div>
    ),
    });

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: Login,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute]);

export const router = createRouter({
    routeTree,
});

export const Routes = () => <RouterProvider router={router} />;