import React from 'react';
import ReactApexChart from 'react-apexcharts';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const socket = io('http://localhost:3005', {
  transports: ['websocket', 'polling']
});


function Graph() {

  const classes = useStyles();

  const [waterLevelClean, setWaterLevelClean] = useState([]);
  const [waterLevelGrey, setWaterLevelGrey] = useState([]);

  useEffect(() => {
    socket.on('sensorReading', sensorObject => {
      const sensorPercent = sensorObject.levelPercentage;
      if (sensorObject.label === "CLEAN") {
        //setWaterLevel(currentWaterLevel => [...currentWaterLevel, cleanWaterSensorPercent]);
        setWaterLevelClean([sensorPercent]);
      } else {
        setWaterLevelGrey([sensorPercent]);
      }
    });
  }, []);  // runs only once  ,,, run when the Graph component mount

  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
    labels: ["WATER"]
  }


  return (


    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ReactApexChart options={options} series={waterLevelClean} type="radialBar" height={350} />

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ReactApexChart options={options} series={waterLevelGrey} type="radialBar" height={350} />
          </Paper>
        </Grid>
      </Grid>
    </div>

  )
}

export default Graph;
