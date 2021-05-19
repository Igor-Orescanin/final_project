import { makeStyles } from "@material-ui/core/styles";

import image from '../../../image/charts_bg_mobile.svg';

export default makeStyles((theme) => ({

    container: {
        //backgroundColor: 'orange',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        color: "#0C9EB5",
        height: '60vh',
    },

    heading: {
        marginBottom: '30px'
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    selectDiv: {
        height: '50px'
    },


    /*  root: {
         "&:hover $notchedOutline": {
             bordercolor: "#007982",
         },
         "&$focused $notchedOutline": {
             bordercolor: "#007982",
         },
     },
     focused: {},
     notchedOutline: {},
 
     notchedOutline: {
         bordercolor: "#007982",
     }, */



    waterDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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