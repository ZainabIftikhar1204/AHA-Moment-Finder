import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


const setup = () => {
    const utils = render(<App/>);

    //signin form fields
    const sign_username = utils.getByLabelText('sign-username');
    const sign_password = utils.getByLabelText('sign-password');

    //login form fields
    const password = utils.getByLabelText('password');
    const email = utils.getByLabelText('email');
    const username = utils.getByLabelText('username');
    const repassword = utils.getByLabelText('repassword');

  
    return{
        sign_password, sign_username,password, username, email, repassword, ...utils,
    }
  }
  describe('Registration',() => {
    test('Check Signin fields', () => {
          
          const {sign_password, sign_username} = setup();
          fireEvent.change(sign_username, { target: { value: 'Zainab' } }) 
          expect(sign_username.value).toBe('Zainab');
          fireEvent.change(sign_password, { target: { value: '123' } }) 
          expect(sign_password.value).toBe('123');
          
      
        });
    test('Check Login Fields - Pass', () => {
        
        const {password, repassword,email, username} = setup();
        fireEvent.change(username, { target: { value: 'Amna' } }) 
        expect(username.value).toBe('Amna');
        fireEvent.change(password, { target: { value: '12345' } }) 
        expect(password.value).toBe('12345');
        fireEvent.change(repassword, { target: { value: '12345' } }) 
        expect(repassword.value).toBe('12345');
        fireEvent.change(email, { target: { value: 'amna@bro.com' } }) 
        expect(email.value).toBe('amna@bro.com');
    
        });
    

      
  })
   