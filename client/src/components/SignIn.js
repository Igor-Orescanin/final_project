import React from 'react'

//styles
import { makeStyles } from '@material-ui/core/styles'; //generel
import{Container} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'; //Typography
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; //icon
import Button from '@material-ui/core/Button'; //button
import Avatar from '@material-ui/core/Avatar'; //avatar
import useStyles from './styles';



import { createMuiTheme,ThemeProvider } from '@material-ui/core';



const SignIn = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >
       <Typography className={classes.typography} component="h1" variant="h5">
          Sign-In
        </Typography>
       
             <Avatar variant='rounded' className={classes.myColor} > 
                 {/* <AccountCircleIcon className={classes.otherColor} fontSize="large"/>  */}
                
             </Avatar> 
          
     
          
        </Container>
    )
}

export default SignIn
