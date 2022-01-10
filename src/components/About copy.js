import React from "react";
import {Typography} from '@material-ui/core';


function About() {
  return  <ThemeProvider theme={theme}>
  <NavBar/>
  <div className={classes.wrapper}>
    <Typography variant="h4" className={classes.bigSpace} color="primary">
       At Rocket.io we are passionate about software
    </Typography>

  </div>


</ThemeProvider>;
}

export default About;
