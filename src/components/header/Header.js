import React from 'react';
import logo from './logo4HF.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { ButtonGroup } from '@material-ui/core';
// import { CloseSharp } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
root: {
    background: '#ffffcc',
    // background: '#2b323a',
},
    logoPaper: {
        flexGrow: 1,
    },
    search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(70, 60, 60)',
    '&:hover': {
      backgroundColor:  'rgb(71, 10, 10)',
    },
    marginRight: theme.spacing(5),
        marginLeft: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      },
    
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  badge: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: '2px',
        right: '5px',
        borderRadius: 50,
        color: 'white',
        backgroundColor: 'red',
        alignItems: 'center',
        fontSize:10
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
    
const Header = () => {

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


        
          <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
              <section to="/"  variant="outlined" className={classes.logoPaper}>
                    <img className={classes.logoimage} src={logo} alt="HulumFurniture-Logo"/>
              </section>
            <i onChange={handleChange}></i>      
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
                            />
          </div>
                    <IconButton aria-label="settings">
                      <ShoppingCart />
                      <span className={classes.badge}>3</span>
              
                    </IconButton>
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
                    <Button onClick={handleClose} className={classes.buttons} href="membership" to="/Membership" >Membership</Button>
                    <br/><Button onClick={handleClose} className={classes.buttons} href="login" to="/LogIn">Login </Button>
                    <br/><Button onClick={handleClose} className={classes.buttons} href="signup" to="/signup">Signup</Button>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
              <div >
                
            </div>
            <nav className="buttonHide" >
                <ButtonGroup className="groupbutton">
                  
                        <Button className={classes.buttons} href="membership" to="/Membership" >Membership</Button>
                        <Button className={classes.buttons} href="login" to="/LogIn">Login </Button>
                        <Button className={classes.buttons} href="signup" to="/signup">Signup</Button>
                  {/* <CloseSharp id="btnext" className="menu_exit"/> */}
              </ButtonGroup>
              </nav>
        </Toolbar>
        </AppBar>
      
    </div>
        </div>
        )
}

export default Header


// import logo from './logo4HF.png';
// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Paper from '@material-ui/core/Paper';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     appBar: {
//         background: '#ffffcc',
//         // zIndex: theme.zIndex.drawer + 1,
//         // zIndex: 1400
//     },
//     logoPaper: {
//         background: '#ffffcc',
//         flexGrow: 1,
//     },
//     buttons: {
//         variant: 'contained',
//         margin:4,
//         background: '#cc6600',
// }
// }
// ));
// const Header = () => {
// const classes = useStyles();
//     return (
// <AppBar position="fixed" className={classes.appBar}>
//                 <Toolbar>
//                     <Paper variant="outlined" className={classes.logoPaper}>
//                     <img src={logo} alt="HulumFurniture-Logo"/>
//                     </Paper>
//                     <div >
//                         <Button className={classes.buttons}> Membership </Button>
//                         <Button className={classes.buttons}>Login</Button>
//                         <Button className={classes.buttons}>Signup</Button>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//     )
// }

// export default Header
