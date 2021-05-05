import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    //backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  radioButton: {
   // backgroundColor: "yellow",
   cursor: "default",
  },

  groupButton: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor:'green',
    alignItems: "center",
  },

  button: {
    borderColor: "#008CA7",
    textTransform: "none",
    marginRight: "10px",
    marginLeft: "10px",
  },

  typography: {
    fontFamily: ("Roboto", "sans-serif"),
    color: "#008CA7",
    fontSize: "12px",
    fontWeight: "bold",
  },
  root: {
    "& .MuiTypography-h6": {
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
}));
