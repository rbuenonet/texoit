import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders Title component with text', () => {
  render(<Title>Hello, World!</Title>);
  const titleElement = screen.getByText(/hello, world/i);
  expect(titleElement).toBeTruthy();
});
