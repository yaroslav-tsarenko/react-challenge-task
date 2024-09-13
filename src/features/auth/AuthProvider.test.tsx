import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AuthProvider } from './AuthProvider';
import { AuthContext } from './AuthContext';

describe('AuthProvider', () => {
    it('should provide auth service', () => {
        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {authService => authService && <span>AuthService Provided</span>}
                </AuthContext.Consumer>
            </AuthProvider>
        );
        expect(screen.getByText('AuthService Provided')).toBeInTheDocument();
    });
});