import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../My Images/logo.png';


const images = [
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Get Started',
    width: '40%',
  },

]
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

export default function ButtonAppBar() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{'backgroundColor':'teal'}}>
        <Toolbar>
          <img style={{ 'width': '80px', 'paddingRight':'18px' }} src={Logo} alt={'Monkey'}></img>
          <Typography variant="h6" className={classes.title}>
            Monkey's Association Ltd.
          </Typography>
          
          <Button color='inherit' className={classes.navBtn}>About</Button>
          <Button color='inherit' href='#contact' className={classes.navBtn}>Contact</Button>
          <Button color='inherit' className={classes.navBtn}>Logout</Button>

        </Toolbar>
      </AppBar>


      
    </div>
  );
}
