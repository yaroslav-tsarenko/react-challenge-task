import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from './Login';
import { AuthContext } from '../../features/auth/AuthContext';
import { AuthService } from '../../core/services/AuthService';
import { MemoryRouter } from 'react-router-dom';

describe('Login', () => {
    it('should login and navigate to account page', () => {
        const authService = new AuthService();
        render(
            <MemoryRouter>
                <AuthContext.Provider value={authService}>
                    <Login />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'user' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
        fireEvent.click(screen.getByText(/login/i));
    });
});