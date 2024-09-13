import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useAuth } from './useAuth';

describe('useAuth Hook', () => {
    it('should initialize with isAuthenticated as false', () => {
        const { result } = renderHook(() => useAuth());
        expect(result.current.isAuthenticated).toBe(false);
    });

    it('should set isAuthenticated to true when correct username and password are provided', () => {
        const { result } = renderHook(() => useAuth());

        act(() => {
            result.current.login('user', 'password');
        });

        expect(result.current.isAuthenticated).toBe(true);
    });

    it('should not change isAuthenticated if incorrect username or password are provided', () => {
        const { result } = renderHook(() => useAuth());

        act(() => {
            result.current.login('wrongUser', 'wrongPassword');
        });

        expect(result.current.isAuthenticated).toBe(false);
    });

    it('should return true on successful login', () => {
        const { result } = renderHook(() => useAuth());
        let success;

        act(() => {
            success = result.current.login('user', 'password');
        });

        expect(success).toBe(true);
    });

    it('should return false on failed login', () => {
        const { result } = renderHook(() => useAuth());
        let success;

        act(() => {
            success = result.current.login('wrongUser', 'wrongPassword');
        });

        expect(success).toBe(false);
    });
});
