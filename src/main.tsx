import "reflect-metadata";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {App} from "./app/App.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
           <App/>
        </StrictMode>
    );
} else {
    console.error("Root element not found. Make sure there's an element with id 'root' in your index.html.");
}
