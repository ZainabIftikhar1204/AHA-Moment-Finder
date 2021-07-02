import { render, screen } from '@testing-library/react';
import Feature from './components/FeatureDropdown/FeatureDropdown';

describe('Feature Dropdown', () => {
  test('renders feature dropdown component', () => {
    render(<Feature />);
    screen.debug();
  });
  

})