import { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';

const authState$ = new BehaviorSubject<boolean>(false);

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(authState$.value);

    useEffect(() => {
        const subscription = authState$.subscribe(setIsAuthenticated);
        return () => subscription.unsubscribe();
    }, []);

    const login = (username: string, password: string) => {
        if (username === 'user' && password === 'password') {
            authState$.next(true);
            return true;
        }
        return false;
    };

    return {
        isAuthenticated,
        login,
    };
};