import React from 'react'
import Button from '@material-ui/core/Button'; //button
import useStyles from './styles';
import { BrowserRouter, Link, Route } from 'react-router-dom'

function Welcome() {
    const classes = useStyles();
    return (
        <div>
             <Button className={classes.button} variant="contained" color="primary">Water</Button>
             <Button className={classes.button} variant="contained" color="primary">Light</Button>
             <Button className={classes.button} variant="contained" color="primary">Controls</Button>
        </div>
    )
}

export default Welcome
