import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  powerOff: {
    color: '#30D4DE'
  },

  powerOn: {
    color: '#008CA7'
  },

  groupButton: {
    marginTop: '15px',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },

  deleteIcon: {
    color: '#0C9EB5',
    marginLeft: '5px'
  },

  button: {
    minWidth: '120px',
    bordercolor: "#008CA7",
    textTransform: "none",
    paddingTop: '6px',
    padding: '4px',
    marginLeft: "10px",
  },

}));