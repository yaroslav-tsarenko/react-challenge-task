import React, { useState, useEffect } from 'react';
import { AuthService } from '../../core/services/AuthService';
import { AuthContext } from './AuthContext';
import { container } from 'tsyringe';

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authService] = useState(() => container.resolve(AuthService));

    useEffect(() => {
    }, [authService]);

    return (
        <AuthContext.Provider value={authService}>
            {children}
            </AuthContext.Provider>
    );
};