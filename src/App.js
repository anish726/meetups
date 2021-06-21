
import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout';

function App() {
 return(
 
<div>

  <Router>
  <Layout>
    <Switch>
<Route path="/" exact>
  <AllMeetups/>
</Route>
<Route path="/new-meetup">
  <NewMeetup/>
</Route>
<Route path="/favorites">
  <Favorites/>
</Route>
</Switch>

</Layout>
</Router>

</div>
 ) 
}
export default App;
