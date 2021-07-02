import { cleanup, render, screen } from '@testing-library/react';
import Signin from './components/Signin';

afterEach(cleanup);
describe ('Signin component', ()=>{
    test('shouold be null', () => {
        const {getByTestId} = render(<Signin/>)
        expect(getByTestId('username').value).toBe('');
        expect(getByTestId('password').value).toBe('');
      });

})
  
