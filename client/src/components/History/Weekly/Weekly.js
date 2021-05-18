import React, { useState, useEffect } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
// material-ui
import { Container, ThemeProvider, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button
//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";


import * as api from "../../../api";
import useStyles from "./styles.js";
import ReactApexChart from 'react-apexcharts';


function Weekly(props) {

    const { history } = props;
    const classes = useStyles();

    let waterData = [];
    let dataTimeStamp = [];

    useEffect(() => {
        api.getWeek()
        .then(res => {
            console.log(res)
            res.data.forEach(reading => {
                waterData.push(reading.value.toFixed())
                dataTimeStamp.push(reading.time)
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    const series = [{
        name: 'Water',
        data: waterData
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
            type: 'datetime',

                categories: dataTimeStamp
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        yaxis: {
            min: 0,
            max: Math.max(...waterData)
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
