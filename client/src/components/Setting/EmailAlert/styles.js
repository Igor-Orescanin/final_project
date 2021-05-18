import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

import image from '../../../image/charts_bg_mobile.svg';

export default makeStyles((theme) => ({

    container: {
        //backgroundColor: 'red',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        color: "#0C9EB5",
        marginTop: '50px'
    },

    paper: {
        //backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bothForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '15px'
    },

    formText: {
        position: 'relative',
        top: '30px'
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 130,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },


    button: {
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        padding: 0,
        backgroundColor: "white",
        color: '#0C9EB5',
        width: '115px',
        height: '38px',
        border: '1px solid #0C9EB5',
        borderRadius: '10px',
        fontSize: '15px',
        marginTop: '20px',

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