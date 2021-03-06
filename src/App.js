import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Profile from './Component/Profile/Profile';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/resume/Resume';
import Header from './Component/Header/Header';
import Footer from './Component/footer/Footer';

import {BrowserRouter as Router, Switch,Route}from 'react-router-dom'


function App() {
  return (
  <Container className={'top_60'}>
    <Grid container spacing={7} >
      <Grid  
       item 
        xs={12} 
        sm={12} 
        md={4} 
        lg={3} >  
      <Profile/>
      </Grid>
      <Grid item xs > 
          <Router>
          <Header/>
<div className='main-content container_shadow'> 
<Switch>
            <Route path='/portfolio'> 
          <Portfolio />
          </Route>
          
          <Route path='/'> 
          <Resume />

          </Route>
            </Switch>
</div>
            
          </Router>
          <Footer/>
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
