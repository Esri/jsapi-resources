import { render, screen } from '@testing-library/react';
import App from './App';

test('Initialize map', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('mapDiv');
});
