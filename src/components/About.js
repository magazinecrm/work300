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



function About() {
  const classes = styles();
  return  <ThemeProvider theme={theme}>
  <NavBar/>
  <div className={classes.wrapper}>
    <Typography variant="h4" className={classes.bigSpace} color="primary">
       We are insurance agent in mumbai . We provide you various insurance services.
       We have around 20 staff working and we have been in existence for more than 20 years.
       We handle all sort of insurance . We are irda registered member .
       We are based in Mulund mumbai . We do have branches in Ghatkopoar, Vashi,etc
       FEel free to contact if you have any doubts
    </Typography>

  </div>


</ThemeProvider>;
}

export default About;
