import React, { useState, useEffect } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import Navbar from '../../Nav/Navbar.js';

// material-ui
import {
  Container,
  ThemeProvider,
  Typography,
  Paper,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button

import * as api from "../../../api";
import useStyles from "./styles.js";
import ReactApexChart from "react-apexcharts";

//icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#18B0C3",
      main: "#0C9EB5",
      dark: "#008CA7",
      contrastText: "#fff",
    },
    secondary: {
      light: "#18B0C3",
      main: "##fff",
      dark: "#008CA7",
      contrastText: "#0C9EB5",
    },
  },
});



function Weekly(props) {
  const { history } = props;
  const classes = useStyles();

  let waterData = [];
  let dataTimeStamp = [];

  useEffect(() => {
    api
      .getWeek()
      .then((res) => {
        console.log(res);
        res.data.forEach((reading) => {
          waterData.push(reading.value.toFixed());
          dataTimeStamp.push(reading.time);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const series = [
    {
      name: "Water",
      data: waterData,
    },
  ];
  const options = {
    title: {
      text: "Liter",
    },
    chart: {
      height: 400,
      width: 600,
      type: "line",
      line: {
        color: ["black"],
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: "#0C9EB5",
    },
    xaxis: {
      type: "datetime",

      categories: dataTimeStamp,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    yaxis: {
      min: 0,
      max: Math.max(...waterData),
    },
  };

  return (
    <>
    <Navbar username={props.username}> </Navbar>
      <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.paper}>
            <div className={classes.buttons}>
              <Button
                //onClick={() => history.push("/weekly")}
                className={`${classes.button} ${classes.disabled}`}
                variant="contained"
                color="primary"
                disabled="true"
                type="submit"
              >
                last 7 Days
              </Button>

              <Button
                onClick={() => history.push("/monthly")}
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                last 30 Days
              </Button>
            </div>
            <Typography className={classes.liveTime}>last 7 days</Typography>
            <div id="chart" className={classes.chart}>
              <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
              />
            </div>

            <ExpandMoreIcon
              className={classes.iconButton}
              fontSize="large"
            ></ExpandMoreIcon>
            <Typography className={classes.typographyInfo2}>
              Water report of the week
            </Typography>
            <Paper className={classes.paper2}>
              <Typography className={classes.typographyInfo}>
                week consumption: {} 34l/day
              </Typography>
              <Typography className={classes.typographyInfo}>
                your Freshwater is by 30{}%
              </Typography>
              <Typography className={classes.typographyInfo}>
                your Graywater is by 25{}%
              </Typography>
            </Paper>

            <div className={classes.footer}></div>
          </div>
        </Container>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}
export default Weekly;
