import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  test('renders NavLogo and NavList', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('toggles mobile menu when hamburger button is clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const hamburgerButton = screen.getByLabelText('Menu Toggle');

    fireEvent.click(hamburgerButton);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.click(hamburgerButton);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  test('closes menu when overlay is clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const hamburgerButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(hamburgerButton);

    const overlay = screen.getByLabelText('overlay');
    fireEvent.click(overlay);

    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe('scroll');
  });

  test('changes the theme when the theme toggle button is clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const themeToggleButton = screen.getByLabelText('Switch to dark mode');

    fireEvent.click(themeToggleButton);
    expect(document.body.getAttribute('data-theme')).toBe('dark');

    fireEvent.click(themeToggleButton);
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });
});
