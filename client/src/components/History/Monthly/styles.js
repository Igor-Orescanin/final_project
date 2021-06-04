import { makeStyles } from "@material-ui/core/styles";
//import zIndex from "@material-ui/core/styles/zIndex";

import image from '../../../image/water_bg_mobile.svg';

export default makeStyles((theme) => ({

    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    paper: {
        //backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    paper2:{      
        zIndex: "-2",
        paddingTop:'20px',
        paddingBottom:'20px',
        marginBottom:'120px',
        borderColor:'#30D4DE',
        border:'solid',
        borderWidth:'1px',
        textAlign:'center',
      },
      iconButton:{
        color:'#008CA7',
        marginTop:'-18px',
      }, 
      typographyInfo:{
        fontSize: "12px",
        fontFamily: ('Roboto', 'sans-serif'),
        paddingLeft:'37px',
        paddingRight:'37px',
      },
      typographyInfo2:{
        marginTop:'10px',
        zIndex: "-2",
        fontSize: "15px",
        fontFamily: ('Roboto', 'sans-serif'),
        paddingTop:'17px',
        paddingLeft:'37px',
        paddingRight:'37px',
        color: "#008CA7",
        fontWeight: 'bold',        
        
      },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        marginTop:'120px'
    },

    button: {
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        padding: 0,
        backgroundColor: "#0C9EB5",
        color: 'white',
        width: '110px',
        paddingTop:'2px',
        border: "solid",
        borderWidth: "2px",
        borderColor: "#008CA7",
        height: '38px',
        borderRadius: '5px',
        fontSize: '15px',
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '20px',
        textTransform: "none",
    },


    disabled:{
        borderColor: "#d4d4d4",
    },


    liveTime: {
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        color:'#008CA7',
        fontSize: '12px',
        marginTop: '10px',
    },

    chart: {
        width: '90vw',
        zIndex: '-2'
    },


    continerMonthlyDetail: {
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        color: '#0C9EB5',
        zIndex: "-5",
        height: '38vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8',
        marginBottom: '80px'
    },

    monthlyDetail: {
        color: 'black',
        border: '1px solid #0C9EB5',
        borderRadius: '10px',
        padding: '15px',
        fontSize: '24px',
        width: '70vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    },


    //for the Image on the bottom
    footer: {
        zIndex: "-1",
        position: "fixed",
        bottom: "0px",
        height: "250px",
        width: "100vw",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },


}))