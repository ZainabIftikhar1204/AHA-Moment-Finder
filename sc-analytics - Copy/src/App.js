
import './App.css';
import Button from '@material-ui/core/Button';
import Dropdown from './components/FeatureDropdown/FeatureDropdown';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Logo from './My Images/logo.png';
import {useState} from 'react';
import {Line} from 'react-chartjs-2';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import html2canvas from 'html2canvas';


let dataset = {};
let display_results = {};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBtn: {
    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize: '15px'

  },

}));
function App() {
  const [userRegistration, setUserRegitration] = useState({
      username : "",
      email : "",
      password: "",
      repassword: "",

  });

  const [records, setRecords] = useState([]);
 
  const classes = useStyles();
  const [state, setState] = useState('signin');
  const showFeatures = () =>{
    setState('features');
  }
  function about(){
    setState("about");
  }
  function contact(){
    setState("contact");
  }
  function register(){
    setState("register");
  }

  function startSignin(){
    e.preventDefault(); 

    const newRecord = {...userRegistration, id: new Date().getTime().toString() } //new data
    setRecords([...records, newRecord]); //the records array has all the previous registrations stored in it
    console.log(records); //send the records array to the backend when submit is clicked (like invoke handleSubmit button)

    setState("start");

  }

  function startRegister(){
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
    alert('Congratulations! You have been registered');
    setState('start');
    }
  }
  
  function calculate(e){
    e.preventDefault();
    let main= document.getElementById("mainFeat").value;
    const data_to_send = { name: main };
    fetch('http://127.0.0.1:5000', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data_to_send),

    })
      //.then(res => res.json())
      //.then(res => console.log(res))
      .then(function(response){
        if (response.status !== 200) {
          console.log("There was an error!");
          return;
        }
        response.json().then(function(data){
          console.log(data);
          display_results = data;
          dataset = {
            labels: data.max_event_vals,
            datasets: [
              {
                label: 'Maximized Event',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: data.goal_event_vals
              }
            ]
    
          } 
          setState('show');
          

        });
        
        

      })

      
      
    
    
      
    setState('calculate');
  }


  const handleInput = (e) => {

      const name = e.target.name;
      const value = e.target.value;
      
      console.log(name , value);

      setUserRegitration({...userRegistration, [name] : value})

  }




  const capturePhoto = () =>{
    html2canvas(document.getElementById('capture')).then(function(canvas){
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");
      
      croppedCanvas.width = 1500;
      croppedCanvas.height = 1000;
      
      //croppedCanvas.style.border='1px solid black';
      
      croppedCanvasContext.drawImage(canvas, 0,-500);
      
      
      const a = document.createElement("a");
      a.href = croppedCanvas.toDataURL();
      a.download = "graph.png";
      a.click();
      // document.body.appendChild(canvas)
    })
    
  };



  return (
            <div className='wrapper'>
              <div style={{ 'paddingTop':'0px'}}>
              <div className={classes.root}>
              <AppBar position="static" style={{'backgroundColor':'teal'}}>
                <Toolbar>
                  <img style={{ 'width': '80px', 'paddingRight':'18px' }} src={Logo} alt={'Monkey'}></img>
                  <Typography variant="h6" className={classes.title}>
                    Monkey's Association Ltd.
                  </Typography>
                  
                  <Button color='inherit' className={classes.navBtn} onClick={about}>About</Button>
                  <Button color='inherit' href='#contact' className={classes.navBtn} onClick={contact}>Contact</Button>
                  <Button color='inherit' className={classes.navBtn}>Logout</Button>

                </Toolbar>
              </AppBar>


              
            </div>

                {state === 'start' && (
                  <div style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)', color:'white', backgroundColor:'teal', borderRadius:'7.5px'}}>
                    <Button className='start-btn' fullWidth='true' size='large' color='inherit' onClick={showFeatures}>Get Started</Button>
                  </div> 
                )}

                {state === 'features' && (
                  <div>
                    <div style={{position:'fixed',marginLeft:'750px', marginTop:'450px', backgroundColor:'teal', transform: 'translate(-50%, -50%)', color:'white', borderRadius:'10px'}}>
                    <Button className='start-btn' fullWidth='true' size='large' color='inherit' onClick={calculate}>Calculate</Button>
                  </div>
                    <Dropdown/>
                  </div>
                  
                )}

        {state === 'calculate' && (
                  <div>
                <h1 style={{alignSelf:'center', color:'#303030'}}>Fetching.... Please Wait</h1>  
                </div>
                )}
        {state === 'show' && (
          <div style={{ marginLeft:'5%'}}>
            <div>
              <div id='capture'>
              <h1> Your Regression Results</h1>
              <Line
                data={dataset}
                options={{
                  title:{
                    display:true,
                    text:'Relationship between Best Correlation Event and Goal Event',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
              />
              <div className="resultsdiv" style={{ marginLeft:'10%', marginTop:'5%'}}>
                    <label> Maximum Correlational Event: {display_results.max}</label><br/>
                    <label> Optimum Value Using Random Forest Regression: {display_results.opt}</label><br/>
                    <label> Prediction for Optimum Value Using Random Forest Regression: {display_results.prediction}</label><br/>
                    <label> Optimum Value Using Linear Regression: {display_results.opt_lin}</label><br/>
                    <label> Prediction for Optimum Value Using Linear Regression: {display_results.prediction_lin}</label><br/>
                    <label> Root Mean Squared Error Using Random Forest Regression: {display_results.rmse_rf}</label><br/>
                    <label> Root Mean Squared Error Using Linear Regression: {display_results.prediction_lin}</label><br/>
            </div>
            </div>
                    <button className='back-btn' fullWidth='true' size='large' s3 onClick={showFeatures}>Back</button>
                    <button className='capture-btn' fullWidth='true' size='large' s3 onClick={capturePhoto}>Capture</button>                    
              </div>
        </div>
        )}
        {state === 'contact' && (
          <div>
          <Contact/>
        </div>
                  
                )}
        {state === 'about' && (
          <div>
          <About/>
        </div>   
                )}

        {state === 'signin' && (
          <div>
          <h1 className='heading'>Sign in</h1>
              <form className='main' action="" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="username">Username</label>
                      <input type="text" autoComplete="off"
                      value={userRegistration.username}
                      onChange={handleInput} 
                      name="username" id="username"
                      data-testid="username"
                      aria-label="sign-username"
                      />
                  </div>
                  
                  <div>
                      <label htmlFor="password">Password</label>
                      <input type="password" autoComplete="off"
                      value={userRegistration.password}
                      onChange={handleInput} 
                      name="password" id="password"
                      data-testid="password"
                      aria-label="sign-password"/>
                  </div>
                  

                  <button className='submit' type="submit" onClick={startSignin}>Sign in</button>
                  <button className='submit' type="submit" onClick={register}>Register</button>
              </form>
        </div>   
                )}

          {state === 'regsiter' && (
            <div>
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
                  

                  <button className='submit' type="submit" onClick={startRegister}>Register</button>
                  
              </form>
            </div>

          )}
            
              
                
                  
                    
              </div>
            </div>
  );
}

export default App;
