import React, { useState, useEffect } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
// material-ui
import { Container, ThemeProvider, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button
//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";


import NavbarSec from "../../Nav/NavbarSec.js";
import useStyles from "./styles.js";
import ReactApexChart from 'react-apexcharts';


function Weekly(props) {

    const { history } = props;
    const classes = useStyles();




    const series = [{
        name: 'Water',
        data: [46, 68, 32, 78, 42, 66, 77]
    }]
    const options = {
        title: {
            text: 'Liter'
        },
        chart: {
            height: 400,
            width: 600,
            type: 'line',
            line: {
                color: ['black']
              },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            colors: '#0C9EB5'
        },

        xaxis: {
            categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
            /* title: {
                text: 'Weekly'
            } */

        },
        /*    xaxis: {
               type: 'datetime',   
   
                categories: ["2018-09-01T00:00:00.000Z", "2018-09-06T05:30:00.000Z", "2018-09-07T02:30:00.000Z", "2018-09-10T03:30:00.000Z", "2018-09-10T17:30:00.000Z", "2018-09-18T05:30:00.000Z", "2018-09-19T06:30:00.000Z","2018-09-22T06:30:00.000Z","2018-09-23T06:30:00.000Z","2018-09-24T06:30:00.000Z","2018-09-25T06:30:00.000Z","2018-09-26T06:30:00.000Z","2018-09-27T06:30:00.000Z","2018-09-28T06:30:00.000Z","2018-09-29T06:30:00.000Z","2018-09-30T06:30:00.000Z","2018-09-31T06:30:00.000Z","2018-10-01T06:30:00.000Z"] 
           }, */
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        yaxis: {
            min: 0,
            max: 100
        },

    }


    return (
        <>
            <StylesProvider injectFirst>
                <Container className={classes.container} >
                    <div className={classes.paper}>
                        <div className={classes.buttons}>
                            <Button
                                //onClick={() => history.push("/weekly")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                disabled='true'
                                type='submit'>Weekly</Button>

                            <Button
                                onClick={() => history.push("/monthly")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'>Monthly</Button>
                        </div>
                        <h3 className={classes.liveTime}>Weekly</h3>
                        <div id="chart" className={classes.chart}>
                            <ReactApexChart options={options} series={series} type="line" height={350} />
                        </div>

                        <div className={classes.continerWeeklyDetail}>
                            <h4>Water report of the Week</h4>
                            <div className={classes.weeklyDetail}>
                                <h6>Week Consumption: 35l/day</h6>
                                <h6>Your Freshwater is by 30%</h6>
                                <h6>Your Graywater is by 25%</h6>
                            </div>
                        </div>



                        <div className={classes.footer}></div>
                    </div>
                </Container>


            </StylesProvider >
        </>
    )
}

export default Weekly
