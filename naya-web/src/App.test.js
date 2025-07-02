import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login button', () => {
  render(<App />);
  const loginBtn = screen.getByRole('button', { name: /login/i });
  expect(loginBtn).toBeTruthy();
});
