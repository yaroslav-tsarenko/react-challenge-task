import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createRootRoute,
    createRoute,
    createRouter, Outlet,
    RouterProvider,
} from "@tanstack/react-router";
import { Login } from "./pages/login/Login";

const rootRoute = createRootRoute({
    component: () => (
        <div>
            <h1>My App</h1>
            <Outlet />
        </div>
    ),
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute, // Define the parent
    path: "/",
    component: () => (
        <div>
            <h1>My App</h1>
            <Outlet />
        </div>
    ),
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute, // Define the parent
    path: "/login",
    component: Login,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute]);

const router = createRouter({
    routeTree,
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
