import React,{ useState } from 'react';
import '../App.css';



/* const heading = {
    marginTop: '12%',
    textAlign: 'center',
    fontSize: '36px',
    color: 'teal'
}

const main = {
    textAlign: 'center',
    fontSize: '20px',
}

const submit = {
    marginTop: '1%',
    fontSize: '20px',
    backgroundColor:'teal',
    color: 'whitesmoke',
} */
const Register = () => {

    

    const [userRegistration, setUserRegitration] = useState({
        username : "",
        email : "",
        password: "",
        repassword: "",
    
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        
        console.log(name , value);

        setUserRegitration({...userRegistration, [name] : value})

    }

 /*    var handlePassword = (e) =>{
        var passName = e.target.name;
        var passValue = e.target.value;

        console.log(passName, passValue);

        setUserRegitration({...userRegistration, [passName] : passValue})
    } */

   /*  var handleRepassword = (e) =>{
        var pass = userRegistration.password;
        var repass = userRegistration.repassword;
        
        

        if (pass !== repass){
            alert("Your passwords donot match. Fix that")
        }
        console.log('i am password')
        console.log(pass);
        console.log('i am repassword');
        console.log(repass);

         setUserRegitration({...userRegistration, [repassName] : repassValue}) 
    } */

    

    const handleSubmit = (e) => {
        e.preventDefault(); 

        var pass = userRegistration.password;
        var repass = userRegistration.repassword;
        
        

        if (pass !== repass){
            alert("Your passwords do not match. Fix that")
            console.log('i am password')
            console.log(pass);
            console.log('i am repassword');
            console.log(repass);
        }
        else{

        const newRecord = {...userRegistration, id: new Date().getTime().toString() } //new data

        console.log(records);
        setRecords([...records, newRecord]); //the records array has all the previous registrations stored in it
        console.log(records); //send the records array to the backend when submit is clicked (like invoke handleSubmit button)

        setUserRegitration({username:"",email:"",password:"",repassword:""}); //to clear screen on refresh

        }
    }

    

    return (
        
        <>
            
              <h1 className='heading'>Registration Form</h1>
              <form className='main' action="" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="username">Username</label>
                      <input type="text" autoComplete="off"
                      value={userRegistration.username}
                      onChange={handleInput} 
                      name="username" id="username"
                      aria-label="username"
                      data-testid="username"/>
                  </div>
                  <div>
                      <label htmlFor="email">Email address</label>
                      <input type="email" autoComplete="off" //because autocomplete is annoying
                      value={userRegistration.email}
                      onChange={handleInput} 
                      name="email" id="email"
                      aria-label="email"
                      data-testid="email"/>
                  </div>
                  <div>
                      <label htmlFor="password">Password</label>
                      <input type="password" autoComplete="off"
                      value={userRegistration.password}
                      onChange={handleInput} 
                      name="password" id="password"
                      aria-label="password"
                      data-testid="passsword"/>
                  </div>
                  <div>
                      <label htmlFor="repassword">Re-enter Password</label>
                      <input type="password" autoComplete="off"
                      value={userRegistration.repassword }
                      onChange={handleInput} 
                      name="repassword" id="repassword"
                      aria-label="repassword"
                      data-testid="repassword"
                      />
                  </div>
                  

                  <button className='submit' type="submit">Submit</button>
                  
              </form>
              
        </>
    )
}

export default Register;