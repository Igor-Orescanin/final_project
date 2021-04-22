import React from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';


function Navbar() {
    const classes = useStyles();
    return (

        <Container className={classes.navbar} >

            <div className={classes.navTop}>
                <p>Hello Sandeep</p>
                <SettingsIcon />
            </div>

            <div className={classes.navBottom}>
                <li>Home</li>
                <li>History</li>
                <li>SignOut</li>
            </div>

        </Container>

    )
}

export default Navbar
