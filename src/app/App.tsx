import {AuthProvider} from "../features/auth/AuthProvider.tsx";
import {Routes} from "./routes.tsx";

export const App = () => (
    <AuthProvider>
        <Routes />
    </AuthProvider>
);