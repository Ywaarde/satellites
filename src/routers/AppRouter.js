import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MissionOverviewPage from '../components/MissionOverviewPage';
import AddMissionPage from '../components/AddMissionPage';
import EditMissionPage from '../components/EditMissionPage';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';
import MissionDetailsPage from '../components/MissionDetailsPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path='/' component={MissionOverviewPage} exact={true}/>
      <Route path='/create' component={AddMissionPage} />
      <Route path='/mission/:id' component={MissionDetailsPage} />
      <Route path='/edit/:id' component={EditMissionPage} />
      <Route component={PageNotFound}/>
    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;