import { render, screen, fireEvent } from '@testing-library/react';
import { Account } from './Account';
import { MemoryRouter } from 'react-router-dom';

describe('Account', () => {
    it('should navigate to home page on button click', () => {
        render(
            <MemoryRouter>
                <Account />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/return to home page/i));
        expect(window.location.pathname).toBe('/');
    });
});