import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  radioButton: {
    backgroundColor: "yellow",
    cursor: "default",
    margin: '0',
    padding: '0',
  },

  groupButton: {
    marginTop: '15px',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },

  checkIcon: {
    color: '#00A2AC'
  },

  noIcon: {
    color: 'red'
  },
  deleteIcon: {
    color: '#0C9EB5',
    marginLeft: '5px'
  },

  button: {
    minWidth: '120px',
    borderColor: "#008CA7",
    textTransform: "none",
    marginLeft: "10px",
    paddingTop: '6px',
    padding: '4px',
    border: "solid",
    borderWidth: "2px",
  },

  typography: {
    minInlineSize: '140px',
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
