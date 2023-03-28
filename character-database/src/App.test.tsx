import { render, screen, RenderResult } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container }: RenderResult = render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
