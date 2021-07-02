import { cleanup, render, screen } from '@testing-library/react';
import Register from './components/Register';

/* afterEach(cleanup);
describe('Login component',() => {
    test('all fields should be empty', () => {
        const {getByTestId} = render(<Signin/>)
        expect(getByTestId('username').value).toBe('');
        expect(getByTestId('password').value).toBe('');
        /*expect(getByTestId('email').value).toBe('');*/
        /*expect(getByTestId('repassword').value).toBe('');
    
      });
    

}) */


const setup = () => {
  const utils = render(<Register/>);
  const input_username = utils.getByLabelText('username');
  const input_email = utils.getByLabelText('email');
  const input_password = utils.getByLabelText('password');
  const input_repassword = utils.getByLabelText('repassword');

  return{
    input_email, input_password, input_repassword, input_username, ...utils,
  }
}
describe('Login component',() => {
    test('all fields should be empty', () => {
        
        const {input_password, input_email, input_repassword, input_username} = setup();
        /* fireEvent.change(input_username, { target: { value: '' } }) 
        expect(input_repassword.value).toBe('');
        expect(input_email.value).toBe('');*/
        expect(input_username.value).toBe(''); 
        expect(input_password.value).toBe('');
        
    
      });
    
})
 
