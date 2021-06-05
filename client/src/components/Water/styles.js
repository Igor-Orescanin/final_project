import { makeStyles } from "@material-ui/core/styles";

// background picture
import image from "../../image/water2_bg_mobile.svg";

export default makeStyles((theme) => ({

    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      },

  paper2: {
    zIndex: "-2",
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '120px',
    borderColor: '#30D4DE',
    border: 'solid',
    borderWidth: '1px',
    textAlign: 'center',
  },

      typography: {
        fontFamily: ("Roboto", "sans-serif"),
        color: "#008CA7",
        fontSize: "12px",
        fontWeight: "bold",
        marginTop: "120px",
      },


  typographyInfo1: {
    zIndex: "-2",
    marginRight: '140px',
    marginTop: '50px',
    color: "#008CA7",
    fontSize: "12px",
    fontFamily: ('Roboto', 'sans-serif'),
  },

  typographyInfo:{
    fontSize: "12px",
    fontFamily: ('Roboto', 'sans-serif'),
    paddingLeft:'37px',
    paddingRight:'37px',
   },

alertTop:{
  marginTop:'10px',
},

   typographyInfoRed:{
     fontSize: "12px",
     fontFamily: ('Roboto', 'sans-serif'),
     paddingLeft:'37px',
     paddingRight:'37px',
     color: "#960524",
    },

  iconButton: {
    color: '#008CA7',
    marginTop: '20px',
  },

  alertTop: {
    marginTop: '10px',
  },

  footer: {
    zIndex: "-1",
    position: "fixed",
    bottom: "0px",
    height: "300px",
    width: "100vw",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
