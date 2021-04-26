import React from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { Typography } from '@material-ui/core';

import { IconButton } from '@material-ui/core';


function Navbar() {
    const classes = useStyles();
    return (
         <Container className={classes.navContainer}>
          
            <div className={classes.secondaryNav}>
            <Typography variant="h6" component="h6" className={classes.typo} >
                Hello Sandeep
            </Typography>
            <SettingsIcon fontSize="small" className={classes.icon}  />
            
             </div>
             <div className={classes.primaryNav}>
             <Typography variant="h6" component="h6" className={classes.typo} >
                 Log Out
             </Typography>
             </div>
         </Container>

    )
}

export default Navbar
