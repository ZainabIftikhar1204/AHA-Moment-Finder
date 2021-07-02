import { render, screen } from '@testing-library/react';
import Contact from './components/Contact/Contact';

describe('Contact', () => {
  test('renders Contact component', () => {
    render(<Contact />);
    screen.debug();
  });
  

})