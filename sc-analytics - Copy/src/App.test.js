import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders app component', () => {
    render(<App />);
    screen.debug();
  });
  

})

