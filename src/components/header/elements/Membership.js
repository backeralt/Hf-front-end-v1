import logo from '../logo4HF.png';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
  logoPaper: {
        flexGrow: 1,
    },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    color: 'rgb(255, 255, 255)',
    marginLeft: theme.spacing(13),
    backgroundColor:'rgb(66, 0, 0)',
    margin: theme.spacing(3, 0, 2),
  },
  word: {
    marginLeft: theme.spacing(17),
  },
  word2: {
    marginLeft: theme.spacing(3),
  },
}));

export default function LogIn() {
  const classes = useStyles();

  return (        
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <section >
                    <img src={logo} alt="HulumFurniture-Logo"/>
              </section>
        <Typography component="h1" variant="h5">
         <h2> Membership Log In </h2>
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        <Grid sm={6} xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
              className={classes.submit}
              
          >
            Log In
            </Button>
            </Grid>
            <Grid>
              <Link href="forgotpassword" to="/forgotpassword" variant="body2"  className={classes.word}>
                Forgot password?
              </Link>
            </Grid>
            <Grid >
              <Link href="membershipForm" to="/membershipform" variant="body2" className={classes.word2}>
                {"Don't have an account? Create Membership account"}
              </Link>
            </Grid>
        </form>
      </div>
      <Box mt={15}>
        <Copyright />
      </Box>
    </Container>
  );
}