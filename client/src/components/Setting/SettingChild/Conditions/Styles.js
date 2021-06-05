import { makeStyles } from "@material-ui/core/styles";

import image from "../../../../image/charts_bg_mobile.svg";

export default makeStyles((theme) => ({

    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
        //height: '65vh',
    },
    paper: {
        marginLeft: '25px',
        marginRight: '25px',
        marginBottom: '150px',
    },
    heading: {
        marginTop: "120px",
        fontWeight: '900',
        fontSize: '30px',
        color: '#007982',
        padding: '10px',
    },
    conditions: {
     margin: '0 30px',
     textAlign: 'justify',
     marginBottom: '150px',
        fontSize: "15px",
    },
    heading2: {
        fontWeight: "900",
        fontSize: "16px",
        color: "#30D4DE",
        padding: "10px",
    },
    typo2: {
        fontWeight: "300",
        fontSize: "16px",
    },
    typo: {
        fontSize: "15px",
    },
    //for the Image on the bottom
    footer: {
        zIndex: "1",
        position: "fixed",
        bottom: "0px",
        left: "0px",
        height: "250px",
        width: "100vw",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },

}));
