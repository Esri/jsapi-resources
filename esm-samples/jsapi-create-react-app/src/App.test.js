// /* eslint-disable testing-library/no-unnecessary-act */
// import { render } from '@testing-library/react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

it('test', () => {
  act(() => {
    createRoot(container).render(<App />);    
  }); 
  expect(container.firstChild).toHaveClass('mapDiv');
});
