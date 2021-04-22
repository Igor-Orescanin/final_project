import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

//styles
import { makeStyles } from '@material-ui/core/styles'; //generel
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'; //Typography
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; //icon
import Button from '@material-ui/core/Button'; //button
import Avatar from '@material-ui/core/Avatar'; //avatar
import useStyles from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
//import Link from '@material-ui/core/Link';


import '../App.css';


import { createMuiTheme, ThemeProvider } from '@material-ui/core';



const SignIn = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container} >
            <div className={classes.paper}>
            <Typography className={classes.typography} component="h1" variant="h5">
                 Sign-In
             </Typography>
             <Avatar className={classes.avatar}/>
             <form className={classes.form} noValidate>

            {/* <TextField className={classes.textfield} id="outlined-basic" label="Email Address*" variant="outlined" />  */}
            <TextField className={classes.textfield} id="outlined-basic"  variant="outlined" size="small"/>
             <TextField variant="outlined" required  id="email" label="Email Address" name="email" size="small"/>
             <Link className={classes.link} href="#" variant="body2">
                 Forgot password
             </Link>
             
             <Button  className={classes.button} variant="contained" color="primary">Sign-In</Button>
            
             
              <div className={classes.backgr}></div> 
             
             </form>
            </div>
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}/>     */}
        </Container>
        // <Container component="main">
        //     <Typography className={classes.typography} component="h1" variant="h5">
        //         Sign-In
        // </Typography>
        //     <Avatar variant='rounded' className={classes.myColor} >
        //         {/* <AccountCircleIcon className={classes.otherColor} fontSize="large"/>  */}

        //     </Avatar>

            
        //     <TextField className={classes.textfield} id="outlined-basic" label="Email Address*" variant="outlined" /> <br />
        //     <TextField className={classes.textfield} id="outlined-basic" label="Password*" variant="outlined" />
            
        //         <h5 >Forgot Password</h5>
        //         <Button className={classes.button} variant="contained" color="primary">Sign-In</Button>

        //     <div className={classes.bg}></div>




        // </Container>
    
    )
}

export default SignIn
