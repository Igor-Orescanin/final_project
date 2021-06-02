// react
import React, { useEffect, useState } from "react";

// for charts
import ReactApexChart from "react-apexcharts";

//for socket.io
import io from "socket.io-client";

//axios
import * as api from "../../api";

//styles to use the connection
import useStyles from "./styles";

//css
import "../../App.css";

// material-ui
import {
  Container,
  ThemeProvider,
  Typography,
  Button,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

// icon
import WarningIcon from '@material-ui/icons/Warning';

import { StylesProvider } from "@material-ui/core/styles";

//icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

import Navbar from '../Nav/Navbar';

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
  overrides: {
    MuiDialog: {
      paper: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "red",
        borderStyle: "solid",
      }
    }
  }
});
//___________start coding
// use/get the socket
const socket = io("http://localhost:3005", {
  transports: ["websocket", "polling"],
});

const Water = (props) => {
  const { history } = props;
  const classes = useStyles();


  const username = props.username;

  let cleanAlertThreshold = props.device.cleanAlertThreshold;
  let wasteAlertThreshold = props.device.wasteAlertThreshold;

  //waterLevel
  const [waterLevelClean, setWaterLevelClean] = useState([]);
  const [waterLevelGrey, setWaterLevelGrey] = useState([]);

  //console.log(waterLevelGrey);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false); // need false for start

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [chart1, setChart] = useState([
    {
      name: "name",
      data: [0],
    },
    {
      name: "Volts",
      data: [0],
    },
  ]);

  //_____________________________________

  // this useEffect is from the water.js

  useEffect(() => {

      socket.on("sensorReading", (sensorObject) => {

        if (sensorObject.label === "CLEAN") {

          //var waterLevelCleanPercentage = sensorObject.levelPercentage;
          setWaterLevelClean([...waterLevelClean, sensorObject.levelPercentage]);
          //setLoading(false)
          console.log(sensorObject.levelPercentage, cleanAlertThreshold);

          if (sensorObject.levelPercentage <= cleanAlertThreshold) {
           setOpen(true);
          }

          //setWaterLevel(currentWaterLevel => [...currentWaterLevel, cleanWaterSensorPercent]);
          //setWaterLevelClean([sensorPercent]);
        } else {
          setWaterLevelGrey([...waterLevelGrey, sensorObject.levelPercentage]);
          //var waterLevelGreyPercentage = sensorObject.levelPercentage;
          setLoading(false);
    
          //console.log(waterLevelGreyPercentage)
        }
        //console.log(waterLevelCleanPercentage.levelPercentage)
        //console.log(sensorObject);
        let sensorPercent = sensorObject.levelPercentage;


        setChart([
          {
            name: "water Level",
            data: [sensorPercent],
          },
          {
            name: "Volts",
            data: [waterLevelGrey],
          },
        ]);
          // max sensor value = 1024
          // pre = (current *100)/1024
          // 500 === (500 * 100) /1024 ==> 48,.....%

          //options.chart.updateSeries(options.series);
          //options = [...options, options.series ]

      });


  }, []); // runs only once  ,,, run when the Graph component mount

  if (loading) {
    return <div> Loading ....</div>;
  }

  //_____________________________________________________________________

  // the chart
  const options = {

    chart: {
      height: 350,
      type: "radialBar",
      color: "#ae45b0",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        hollow: {
          size: "70%",
        },
        dataLabels: {
          name: {
            // offsetY: 20,
            color: (waterLevelClean <= cleanAlertThreshold ? "#9c1335" : "#008CA7"),
          },
        },

      },
    },
    fill: {
      opacity: 1.5,
      colors: (waterLevelClean <= cleanAlertThreshold ? ["#9c1335"] : ["#30D4DE"]),
      // colors: ["#30D4DE"],
      type: "gradient",
      gradient: {
        gradientToColors: (waterLevelClean <= cleanAlertThreshold && cleanAlertThreshold != 0 ? ["#9c1335"] : ["#30D4DE"]),
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 2,
        stops: [0, 50, 100],
        inverseColors: false,
      },
    },
    labels: ["Freshwater"],

  };
  //_____ 2. chart

  const options2 = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        hollow: {
          size: "70%",
        },

        dataLabels: {
          name: {
            // offsetY: 20,
            color: (waterLevelGrey >= wasteAlertThreshold && wasteAlertThreshold != 0 ? "#9c1335" : "#008CA7"),

          },
        },
      },
    },

    labels: ["Greywater"],


    fill: {
      opacity: 1.5,
      colors: (waterLevelGrey >= wasteAlertThreshold ? ["#9c1335"] : ["#77A783"]),
      // colors: ["#77A783"],
      type: "gradient",
      gradient: {
        gradientToColors: (waterLevelGrey >= wasteAlertThreshold ? ["#9c1335"] : ["#77A783"]),
        // gradientToColors: ["#77A783"],
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 2,
        stops: [0, 50, 100],
        inverseColors: false,
      },
    },
  };



  return (
    <>
      <Navbar username={props.username}> </Navbar>

      <ThemeProvider theme={theme}>

        <Container className={classes.container}>
            <>
              <Typography className={classes.typography}>Realtime Data</Typography>

              <div >
                <ReactApexChart
                  options={options}
                  series={waterLevelClean}
                  type="radialBar"
                  height={250}
                />

              {/* <Typography className={(waterLevelClean <= cleanAlertThreshold ? classes.typographyInfoRed : classes.typographyInfo)} >

                {(waterLevelClean <= cleanAlertThreshold ? `Your Freshwater is under ${cleanAlertThreshold}%` : null)}

              </Typography> */}

                <ReactApexChart
                  options={options2}
                  series={waterLevelGrey}
                  type="radialBar"
                  height={250}
                />
              </div>


              <Button
                // onClick={() => history.push("/emailalert")}
                onClick={() => history.push({
                pathname: "/emailalert",

                })}
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Modify Alert
              </Button>

              <ExpandMoreIcon
                className={classes.iconButton}
                fontSize="large"
              ></ExpandMoreIcon>

              <Typography className={classes.typographyInfo1}>
                Information
              </Typography>
              <Paper className={classes.paper2}>

              <Typography className={(waterLevelClean <= cleanAlertThreshold ? classes.typographyInfoRed : classes.typographyInfo)} >
                {/* <Typography className={classes.typographyInfo} > */}
                  Your Freshwater is by {waterLevelClean}%
                </Typography>

              <Typography className={(waterLevelGrey >= wasteAlertThreshold ? classes.typographyInfoRed : classes.typographyInfo)}>
                  Your Greywater is by {waterLevelGrey}%
                </Typography>
                <Typography className={classes.typographyInfo2}>
                  All is good for you!
                </Typography>
              </Paper>



        {/* <Typography> className={(waterLevelClean <= cleanAlertThreshold ? classes.typographyInfoRed : classes.typographyInfo)} >

                {(waterLevelClean <= cleanAlertThreshold ? `Your Freshwater is under ${cleanAlertThreshold}%` : null)}

             </Typography>  */}





               <Dialog 
              className={classes.dialog}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className={classes.alertTitle}>
                {<WarningIcon fontSize="large" ></WarningIcon>}<br></br>
                {"!!!Alert!!!"}
              </DialogTitle>
              <DialogContent>
{(waterLevelClean <= cleanAlertThreshold ?   <div>
                    <DialogContentText id="alert-dialog-description">
                    {(waterLevelClean <= cleanAlertThreshold ? `Your Freshwater is under ${cleanAlertThreshold}%` : null)}
                      </DialogContentText>
                  </div>: null)}
  {(waterLevelGrey >= wasteAlertThreshold? <div>
                    <DialogContentText id="alert-dialog-description">
                      {(waterLevelGrey <= wasteAlertThreshold? `Your Greywater is higer ${wasteAlertThreshold}%` : null)}
                      </DialogContentText>
                  </div>: null)}              
                 


              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                    </Button>
              </DialogActions>
            </Dialog> 

          </>

            <div className={classes.footer}></div>

        </Container>

      </ThemeProvider>

    </>
  );
};

export default Water;
