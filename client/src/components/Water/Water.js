// react
import React, { useEffect, useState } from "react";

// for charts
import ReactApexChart from "react-apexcharts";

//for socket.io
import io from "socket.io-client";

//connection
import NavbarSec from "../Nav/NavbarSec.js";

//styles to use the connection
import useStyles from "./styles";

//css
import "../../App.css";

// material-ui
import { Container, Button, Paper, Grid } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";

//___________start coding
// use/get the socket
const socket = io("http://localhost:3005", {
  transports: ["websocket", "polling"],
});

const Water = (props) => {
  const { history } = props;
  const classes = useStyles();

  //waterLevel
  const [waterLevelClean, setWaterLevelClean] = useState([]);
  const [waterLevelGrey, setWaterLevelGrey] = useState([]);
  let waterLevel = 0;
  //console.log(waterLevelGrey);
  const [loading, setLoading] = useState(false)

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

  
  const options = {
    chart: {
      // height:850,
      width: "50%",
      type: "bar",
      background: "#f4f4f4",
      foreColor: "#0C9EB5",
      toolbar: {
        show: false,
      },
    },

    series: [
      {
        name: "water chart",
        data: [waterLevel, 0, 30],
      },
    ],

    xaxis: {
      categories: ["FreshWater", "Greywater"],
    },

    plotOptions: {
      bar: {
        horizontal: false,
      },
    },

    fill: {
      colors: ["#77A783"],
    },

    dataLabels: {
      enabled: false,
    },

    title: {
      text: "hello",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {},
    },
  };

  useEffect(() => {
    socket.on("sensorReading", (sensorObject) => {

      if (sensorObject.label === "CLEAN") {
        //var waterLevelCleanPercentage = sensorObject.levelPercentage;
        setWaterLevelClean([...waterLevelClean, sensorObject.levelPercentage])
        //setLoading(false)
        console.log(waterLevelClean)
        
        //setWaterLevel(currentWaterLevel => [...currentWaterLevel, cleanWaterSensorPercent]);
        //setWaterLevelClean([sensorPercent]);
      } else {
        setWaterLevelGrey([...waterLevelGrey, sensorObject.levelPercentage])
        //var waterLevelGreyPercentage = sensorObject.levelPercentage;
        setLoading(false)
        //console.log(waterLevelGreyPercentage)
      }
//console.log(waterLevelCleanPercentage.levelPercentage)
      console.log(sensorObject)
      let sensorPercent = sensorObject.levelPercentage;
      setChart([
        {
          name: "water Level",
          data: [sensorPercent]
        },
        {
          name: "Volts",
          data: [waterLevelGrey]
        },

        
      ]);
      // max sensor value = 1024
      // pre = (current *100)/1024
      // 500 === (500 * 100) /1024 ==> 48,.....%

      //options.chart.updateSeries(options.series);
      //options = [...options, options.series ]

    });
  }, []); // runs only once  ,,, run when the Graph component mount

  if(loading){
    return <div> Loading ....</div>
  }

  return (
    <>
      <StylesProvider injectFirst>
        <NavbarSec />
        <Container className={classes.container}>
          {/* <div>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <ReactApexChart options={options} series={waterLevelClean} type="radialBar" height={350}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <ReactApexChart options={options} series={waterLevelGrey} type="radialBar" height={350}
                  />
                </Paper>
              </Grid>
            </Grid>
          </div> */}
          <div>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {/* <ReactApexChart   className={classes.chart} options={test} series={test.series} type="bar" height={350} 
            /> */}
                <ReactApexChart
                  className={classes.chart}
                  options={options}
                  series={chart1}
                  type="bar"
                  height={280}
                  width="100%"
                />
                {/* </Paper>
            </Grid>
             </div>
            
           <div>
            <Grid item xs={6} >
              <Paper className={classes.paper}> */}
                {/* <ReactApexChart className={classes.chart} options={option} series={option.series} type="bar" height={280} width='40%' */}
                {/* />  */}
              </Paper>
            </Grid>
          </div>
          <Button
            onClick={() => history.push("/welcome")}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Sign-In
          </Button>
          <div className={classes.footer}></div>
        </Container>
      </StylesProvider>
    </>
  );
};

export default Water;
