import { useEffect, useState } from 'react';
import { container } from 'tsyringe';
import { AuthService } from '../../core/services/authService';

export const useAuth = () => {
    const authService = container.resolve(AuthService);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const subscription = authService.isAuthenticated$.subscribe(setIsAuthenticated);
        return () => subscription.unsubscribe();
    }, [authService]);

    return { isAuthenticated, login: authService.login.bind(authService), logout: authService.logout.bind(authService) };
}