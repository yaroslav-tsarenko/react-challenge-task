import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
    it('should navigate to login page on button click', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/login into account/i));
        expect(window.location.pathname).toBe('/login');
    });
});