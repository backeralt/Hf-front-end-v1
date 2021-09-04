import logo from '../logo4HF.png';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "../Header.css";
import { ButtonGroup, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import { FormGroup } from '@material-ui/core';
import MediaCapture from './MediaCapture';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://hulumfurniture.com/">
        Hulum Furniture
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    color: 'rgb(255, 255, 255)',
    marginLeft: theme.spacing(13),
    backgroundColor:'rgb(66, 0, 0)',
    margin: theme.spacing(3, 0, 2),
  },
  logoPaper: {
        flexGrow: 1,
    },
  word2: {
    marginLeft: theme.spacing(10),
    },
  root: {
    background: '#ffffcc',
   
},
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('md')]: {
      width: '20em',
    },
  },
menuButton: {
    marginRigSht: -6,
    color: '#2b323a',
    
    
},
buttons: {
        variant: 'contained',
        margin: 4,
        color:"secondary",
  background: '#cc6600',
        '&:hover': {
      backgroundColor:  '#20272E',
    },
}
}));

export default function SignUp() {
    const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



    return (
        <div>
            <AppBar position="static" className={classes.root}>
        <Toolbar>
              <section href="login" to="/" variant="outlined" className={classes.logoPaper}>
                    <img  className={classes.logoimage} src={logo} alt="HulumFurniture-Logo"/>
              </section>
            <i onChange={handleChange}></i>      
           
        {auth && (
              <div  className="iconHide">
                <nav ><IconButton
                  edge="start"
                  
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleMenu}
                  className={classes.menuButton}
                  
                >
                  <MenuIcon  />
                </IconButton>
                </nav>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                    <Button onClick={handleClose} className={classes.buttons} href="signup" to="/signup">Signup</Button>
                    <br/><Button onClick={handleClose} className={classes.buttons} href="login" to="/LogIn">Login </Button>
                    
                </Menu>
              </div>
            )}
              <div >
                
            </div>
            <nav className="buttonHide" >
                <ButtonGroup className="groupbutton">
                  
                        <Button className={classes.buttons} href="login" to="/LogIn">Login </Button>
                        <Button className={classes.buttons} href="signup" to="/signup">Signup</Button>
                 </ButtonGroup>
              </nav>
        </Toolbar>
        </AppBar>
      
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <h2>Membership Application Form</h2>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item md={4} xs={4}>
                <p>Company Name</p>
                </Grid>
               <Grid item md={8} xs={8}>
              <TextField
                autoComplete="Companyname"
                name="CompanyName"
                variant="outlined"
                required
                fullWidth
                id="CompanyName"
                label=" Company-Name"
                autoFocus
              />
            </Grid>
            <Grid item md={4} xs={4}>
                          <p>Company Email</p>
            </Grid>
            <Grid item md={8} xs={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item md={4} xs={4}>
                <p>Address City</p>
                </Grid>
               <Grid item md={8} xs={8}>
              <TextField
                autoComplete="Addresscity"
                name="Addresscity"
                variant="outlined"
                required
                fullWidth
                id="Addresscity"
                label="Address-city"
                autoFocus
              />
            </Grid>
            <Grid item md={4} xs={4}>
                <p>Sub City</p>
                </Grid>
               <Grid item md={8} xs={8}>
              <TextField
                autoComplete="Subcity"
                name="SubCity"
                variant="outlined"
                fullWidth
                id="SubCity"
                label="Sub-city"
                autoFocus
              />
            </Grid>
            <Grid item md={4} xs={4}>
             <p>NeighborHood Name</p>
                </Grid>
               <Grid item md={8} xs={8}>
              <TextField
                autoComplete="NeighborHoodname"
                name="NeighborHoodName"
                variant="outlined"
                required
                fullWidth
                id="NeighborHoodName"
                label=" NeighborHood-Name"
                
              />
            </Grid>
            
            </Grid>
            <br/><br />
            <FormGroup>
                <FormLabel> <p className="upload" >Is This a Main Branch or a Show Room?</p>
                    <RadioGroup>
                        <FormControlLabel value="main" control={<Radio/>} label="Main"/>
                        <FormControlLabel value="showroom" control={<Radio/>} label="Show room"/>
                    </RadioGroup>
                </FormLabel>
            </FormGroup>
            <br/>
             <FormLabel> 
                 <p className="upload">If this is a Branch select Head</p>
              <Grid item md={8} xs={8}>
              <TextField
                autoComplete="Head"
                name="Head"
                variant="outlined"
                fullWidth
                id="Head"
                label="Head"
              />
            </Grid>
                    
                </FormLabel>
         
              <br />
              <br />
              <FormLabel> <p className="upload">upload Picture of the show room from outside amd inside view</p>
              </FormLabel>
              <MediaCapture />
             
          <br />
          <Grid sm={6} xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Submit
            </Button>
            </Grid>
          {/* <Grid container >
            <Grid>
              <Link href="membership" to="/membership" variant="body2" className={classes.word2}>
                Already have A Membership account? Membership log in  
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={6}>
        <Copyright />
      </Box>
            </Container>
        </div>
  );
}