import React from 'react'

//styles
import { makeStyles } from '@material-ui/core/styles'; //generel
import{Container} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; //icon
import Button from '@material-ui/core/Button'; //button
import Avatar from '@material-ui/core/Avatar'; //avatar
//import useStyles from './styles';

//import StorageIcon from '@material-ui/icons/Storage';

import { createMuiTheme,ThemeProvider } from '@material-ui/core';

import useStyles from "./styles"

//const classes = useStyles();







const SignIn = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >
        <div> 
       
             <Avatar className={classes.myColor} > 
                 <AccountCircleIcon className={classes.otherColor} fontSize="large"/> 
                
             </Avatar> 
          
        </div>
        
          
        </Container>
    )
}

export default SignIn
