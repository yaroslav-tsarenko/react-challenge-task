import "reflect-metadata";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "../src/routes/routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Routes />
    </StrictMode>
);