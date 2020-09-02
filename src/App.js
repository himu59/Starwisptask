import React from 'react';
import './App.css';
import Nav from './Nav';
import Mainbox from './Mainbox';
import Newtab from './Newtab'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Quatation from './Quatation';
import Component from './Component';
import Todo from './Todo';
import AdminProfile from './AdminProfile'
function App() {
  return(
      <Router>
          <Nav/>
          <div className="App">   
            <Switch>    
              <Route exact path="/Starwisptask" component={Mainbox}/>    
              <Route path="/hello" component={Newtab}/>  
              <Route path="/todo" component={Todo}/>  
              <Route path="/Quatation" component={Quatation}/>  
              <Route path="/AdminProfile" component={AdminProfile}/>  
              <Route path="/component" component={Component}/>  
            </Switch>   
          </div>
      </Router>
  );
}

export default App;
