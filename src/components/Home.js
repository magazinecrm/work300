import React from "react";
import {Typography} from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar'

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


function Home() {
  const classes = styles();
  return  <ThemeProvider theme={theme}>
  <NavBar/>
  <div className={classes.wrapper}>
    <Typography variant="h4" className={classes.bigSpace} color="primary">
       This is our home page and it is supposed to be more better cool and nice
       I  belive i enjoyed todays work praise the  Lord first mission done great Lord in sky.
    </Typography>

  </div>


</ThemeProvider>;
}


export default Home;