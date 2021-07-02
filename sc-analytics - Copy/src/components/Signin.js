import React,{ useState } from 'react'


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
const Signin = () => {


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
    

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const newRecord = {...userRegistration, id: new Date().getTime().toString() } //new data

        console.log(records);
        setRecords([...records, newRecord]); //the records array has all the previous registrations stored in it
        console.log(records); //send the records array to the backend when submit is clicked (like invoke handleSubmit button)

        setUserRegitration({username:"",email:"",password:"",repassword:""}); //to clear screen on refresh


    }

    

    return (
        <>
                <div>
                    <h1 className='heading'>Sign in</h1>
                    <form className='main' action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" autoComplete="off"
                            value={userRegistration.username}
                            onChange={handleInput} 
                            name="username" id="username"
                            data-testid="username"/>
                        </div>
                        
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" autoComplete="off"
                            value={userRegistration.password}
                            onChange={handleInput} 
                            name="password" id="password"
                            data-testid="password"/>
                        </div>
                        

                        <button className='submit' type="submit">Sign in</button>
                        <button className='submit' type="submit">Login</button>
                    </form>
                </div>

        </>
    )
}

export default Signin;