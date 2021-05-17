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
        data: [31, 40, 28, 51, 42, 92, 100, 90, 82, 78, 68, 78]
    }]
    const options = {
        title: {
            text: 'Liter'
        },
        chart: {
            height: 350,
            type: 'line',            
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            colors: '#0C9EB5'
        },
        xaxis: {
            //type: 'datetime',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            /* title: {
                text: 'Monthly',
            }, */

            /* categories: ["2018-09-19T00:00:00.000Z", "2018-09-20T01:30:00.000Z", "2018-09-21T02:30:00.000Z", "2018-09-22T03:30:00.000Z", "2018-09-23T04:30:00.000Z", "2018-09-24T05:30:00.000Z", "2018-09-25T06:30:00.000Z"] */
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        yaxis: {
            /* title: {
                text: 'Liter'
            }, */
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
                                onClick={() => history.push("/weekly")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'>Weekly</Button>

                            <Button
                                //onClick={() => history.push("/monthly")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'
                                disabled='true'
                            >Monthly</Button>

                        </div>
                        <h3 className={classes.liveTime}>Monthly</h3>
                        <div id="chart" className={classes.chart}>
                            <ReactApexChart options={options} series={series} type="line"  height={300} />
                        </div>

                        <div className={classes.continerMonthlyDetail}>
                            <h4>Water report of the Month</h4>
                            <div className={classes.monthlyDetail}>
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
