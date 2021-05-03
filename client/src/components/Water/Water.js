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

constructor(props) 
  super(props);
  this.state = {
     option:{

     },

  }


  const { history } = props;
  const classes = useStyles();

  //waterLevel
  const [waterLevelClean, setWaterLevelClean] = useState([]);
  const [waterLevelGrey, setWaterLevelGrey] = useState([]);

  useEffect(() => {
    socket.on("sensorReading", (sensorObject) => {
      const sensorPercent = sensorObject.levelPercentage;
      if (sensorObject.label === "CLEAN") {
        //setWaterLevel(currentWaterLevel => [...currentWaterLevel, cleanWaterSensorPercent]);
        setWaterLevelClean([sensorPercent]);
      } else {
        setWaterLevelGrey([sensorPercent]);
      }
    });


  }, []); // runs only once  ,,, run when the Graph component mount



  // var chart = new ApexCharts(el, options);
  // chart.updateSeries([{
  // data: waterLevelClean
  // }])




//_______maritza



  // const options = {
  //   chart: {
  //     height: 350,
  //     type: "radialBar",
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       hollow: {
  //         size: "70%",
  //       },
  //     },
  //   },
  //   labels: ["WATER"],
  // };


  // -----------my first test--------------
  //  const test = {

    // series: [{
    //     data: [waterLevelClean, waterLevelGrey],
    //   },],

  //    series: [{
  //      data: [21, 22, 10, 28, 16, 21, 13, 30]
  //    }],


  //     chart: {
  //       toolbar: {
  //         show: false,
  //       },

  //       fill:{
  //         colors:['#f44336']
  //       },
        


  //      options: {
  //        chart: {

  //         fill:{
  //           colors:['#f44336']
  //         },
          


  //          id: 'realtime', // new from down
  //      height: 350,
  //      type: "bar",
  //      events: {
  //        click: function (chart, w, e) {
  //          // console.log(chart, w, e)
  //        },
  //      },
  //        },
  //      },

  //      colors: "#30D4DE",
  //      plotOptions: {
  //        bar: {
  //          columnWidth: "45%",
  //          distributed: true,
  //        },
  //      },
  //      dataLabels: {
  //        enabled: false,
  //      },
  //      legend: {
  //        show: false,
  //      },
  //      xaxis: {
  //        categories: [
  //          ["CleanWater"],
  //          ["GreyWater"],
         
  //        ],
  //        labels: {
  //          style: {
  //            colors: "#30D4DE",
  //            fontSize: "12px",
  //          },
  //        },
  //      },
  //    },
  //  };

  // window.setInterval(() => {
  
    
  //   ApexCharts.exec('realtime', 'updateSeries', [{
  //   data: waterLevelClean
  //   }])
  //   }, 1000) 

const options = {
  chart:{
    // height:850,
    width :'50%',
    type:'bar',
    background:'#f4f4f4',
    foreColor: '#0C9EB5',
    toolbar: {
      show: false,
      },
  },

  series: [{
    name: 'water chart',
    data: [100,0,30]
    }],
    
  xaxis:{
    categories: ['FreshWater','Greywater'],
  },

  plotOptions:{
    bar:{
      horizontal:false,
    }
  },

  fill:{
    colors:['#77A783']
  },

  dataLabels:{
    enabled: false,
  },

  title:{
    text:'hello',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style:{

    },

  },

}

//  const option = {
//    chart:{
//      // height:850,
//      width :'50%',
//      type:'bar',
//      background:'#f4f4f4',
//      foreColor: '#0C9EB5',
//      toolbar: {
//        show: false,
//        },
//    },
//    series: [{
//      name: 'water chart',
//      data: [30]
//      }],  
//    xaxis:{
//      categories: ['GreyWater'],
//    },
//    plotOptions:{
//      bar:{
//        horizontal:false,
//      }
//    },
//    fill:{
//      colors:['#77A783']
//    },
//    dataLabels:{
//      enabled: false,
//    },
//    title:{
//      text:'hello',
//      align: 'center',
//      margin: 20,
//    },
//  }

  return (
    <>
      <StylesProvider injectFirst>
        <NavbarSec />
        <Container>
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
            <ReactApexChart className={classes.chart} options={options} series={options.series} type="bar" height={280} width='100%'
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
        </Container>
      </StylesProvider>
    </>
  );
};

export default Water;
