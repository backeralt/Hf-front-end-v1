import logo from '../logo4HF.png';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "../Header.css";
// import { ButtonGroup} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';


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
    '@media only screen and (min-width:800px)': {
        display: 'none',
    
}
}
}));

export default function MembershipPage() {
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
                <section variant="outlined" className={classes.logoPaper}>
                    <img to="/" className={classes.logoimage} src={logo} alt="HulumFurniture-Logo" />
                </section>
                <i onChange={handleChange}></i>
           
                {auth && (
                    <div className="iconHide">
                        <nav ><IconButton
                            edge="start"
                  
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleMenu}
                            className={classes.menuButton}
                  
                        >
                            <MenuIcon />
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
                            <Button onClick={handleClose} className={classes.buttons}  to="/showroom">Showroom</Button>
                            <br /><Button onClick={handleClose} className={classes.buttons}  to="/profile">profile </Button>
                            <br /><Button onClick={handleClose} className={classes.buttons}  to="/help">Help </Button>
                    
                        </Menu>
                    </div>
                )}
                <div >
                
                </div>
                {/* <nav className="buttonHide" >
                    <ButtonGroup className="groupbutton">
                  
                        <Button className={classes.buttons} href="login" to="/LogIn">Login </Button>
                        <Button className={classes.buttons} href="signup" to="/signup">Signup</Button>
                    </ButtonGroup>
                </nav> */}
            </Toolbar>
            </AppBar>
            <h2> well come to Hulum Furniture
            </h2>
        </div>
    );
}