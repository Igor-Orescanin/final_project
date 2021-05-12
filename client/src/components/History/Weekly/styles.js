import { makeStyles } from "@material-ui/core/styles";

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

    buttons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
    },

    button: {
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        padding: 0,
        backgroundColor: "#0C9EB5",
        color: 'white',
        width: '106px',
        height: '38px',
        borderRadius: '20px',
        fontSize: '15px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px'
    },

    liveTime: {
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
    },

    chart: {
        width: '90vw',
        zIndex: '-2',
    },

    continerWeeklyDetail: {
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

    weeklyDetail: {
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