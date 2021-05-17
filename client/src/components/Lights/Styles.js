import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

import image from '../../image/charts_bg_mobile.svg';

export default makeStyles((theme) => ({

    container: {
        //backgroundColor: 'red',
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
    },

    paper: {
        //backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',


    },

    buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'left',
        margin: '10px',
        height: '60vh',
    },

    button: {
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        padding: 0,
        backgroundColor: "#0C9EB5",
        color: 'white',
        width: '106px',
        height: '38px',
        borderRadius: '10px',
        fontSize: '15px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
    },




    //for the Image on the bottom
    footer: {
        zIndex: "-1",
        position: "fixed",
        bottom: "0px",
        left: '0px',
        height: "250px",
        width: "100vw",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },





}))