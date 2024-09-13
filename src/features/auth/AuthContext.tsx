import { createContext } from 'react';
import { AuthService } from '../../core/services/AuthService';

export const AuthContext = createContext<AuthService>(null!);