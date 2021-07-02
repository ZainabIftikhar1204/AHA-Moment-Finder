
import './App.css';
import Button from '@material-ui/core/Button';
import Dropdown from './components/FeatureDropdown/FeatureDropdown';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Logo from './My Images/logo.png';
import {useState, Fragment} from 'react';
import {Line} from 'react-chartjs-2';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import html2canvas from 'html2canvas';
import screenshot from 'screenshot-desktop';


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
  const [state, setState] = useState('start');
  const showFeatures = () =>{
    setState('features');
  }
  function about(){
    setState("about");
  }
  function contact(){
    setState("contact");
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

  

const classes = useStyles();

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
                <h1>Fetching.... Please Wait</h1>  
                </div>
                )}
        {state === 'show' && (
          <div style={{ marginLeft:'5%'}}>
            <div id='capture'  style={{height:'auto', paddingBottom:'10px'}}>
              <div >
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
              <div id='resultsofanalysis' className="resultsdiv" style={{ marginLeft:'10%', marginTop:'5%'}}>
                    <label> Maximum Correlational Event: {display_results.max}</label><br/>
                    
                    <label> Prediction for Optimum Value Using Random Forest Regression: {display_results.prediction}</label><br/>
                    
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
              
                
                  
                    
              </div>
            </div>
  );
}

export default App;
