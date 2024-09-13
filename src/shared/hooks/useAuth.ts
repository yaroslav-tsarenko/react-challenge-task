import { useContext } from 'react';
import { AuthContext } from '../../features/auth/AuthContext';

export const useAuth = () => {
    return useContext(AuthContext);
};