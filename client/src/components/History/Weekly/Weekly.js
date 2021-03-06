import React, { useEffect } from "react";
import { StylesProvider } from "@material-ui/core/styles";
//import { useHistory } from "react-router-dom";

import Navbar from '../../Nav/Navbar.js';

// material-ui
import {
  Container,
  ThemeProvider,
  Typography,
  Paper,
  // TextField,
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

  const series = [{
    name: 'Water',
    data: [13, 6, 11, 19, 6, 17, 8]
  }]
  const options = {
    title: {
      text: 'Liter'
    },
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008CA7"],
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      //type: 'datetime',
      categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
      max: 20
    },

  }


  /* const series = [
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
  };*/

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
                Water consumption of 7 days
            </Typography>
              <Paper className={classes.paper2}>
                <Typography className={classes.typographyInfo}>
                  average consumption: { } 12l/day
              </Typography>
                {/* <Typography className={classes.typographyInfo}>
                  your Fresh water is by 33{ }%
              </Typography>
                <Typography className={classes.typographyInfo}>
                  your Waste water is by 64{ }%
              </Typography> */}
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
