import React from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Router, Route, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TopContainer from './components/TopContainer';
import SampleContainer1 from './components/SampleContainer1';
import SampleContainer2 from './components/SampleContainer2';
import {
cyan500, cyan700,
grey100, grey300, grey400, grey500,
pinkA200,
deepPurple500, deepPurple600, deepPurple700, deepPurple900,
white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const heroku = '#684fb6';
const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: heroku,
    primary2Color: deepPurple900,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  }, 
});


render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={TopContainer}/>
      <Route path="sample1" component={SampleContainer1}/>
      <Route path="sample2" component={SampleContainer2}/>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
