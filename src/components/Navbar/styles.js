import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: '10px 50px',
    [theme.breakpoints.down("sm")]: {
      padding: "10px 20px"
    }
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem'
    }
  },
  image: {
    marginLeft: "15px",
    [theme.breakpoints.down('sm')]: {
      height: '30px',
      marginLeft: "5px"
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  signin: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "25px",
    }
  }
}));
