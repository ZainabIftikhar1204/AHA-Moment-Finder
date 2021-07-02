import { render, screen } from '@testing-library/react';
import About from './components/About/About';

describe('About', () => {
  test('renders About component', () => {
    render(<About />);
    screen.debug();
  });
  

})