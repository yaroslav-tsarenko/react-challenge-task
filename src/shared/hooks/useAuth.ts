import { useState } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (username: string, password: string) => {
        if (username === 'user' && password === 'password') {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    return {
        isAuthenticated,
        login,
    };
};