import { AuthService } from './AuthService';
import { describe, it, expect, beforeEach } from 'vitest';

describe('AuthService', () => {
    let authService: AuthService;

    beforeEach(() => {
        authService = new AuthService();
    });

    it('should initialize with false auth state', () => {
        authService.isAuthenticated().subscribe(isAuth => {
            expect(isAuth).toBe(false);
        });
    });

    it('should set auth state to true on login', () => {
        authService.login('user', 'password');
        authService.isAuthenticated().subscribe(isAuth => {
            expect(isAuth).toBe(true);
        });
    });

    it('should set auth state to false on logout', () => {
        authService.login('user', 'password');
        authService.logout();
        authService.isAuthenticated().subscribe(isAuth => {
            expect(isAuth).toBe(false);
        });
    });
});