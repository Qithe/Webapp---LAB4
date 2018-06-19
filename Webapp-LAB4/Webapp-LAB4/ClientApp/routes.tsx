import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import ManageQuestions from './components/ManageQuestions';
import Highscore from './components/Highscore';
import CreateUser from './components/CreateUser';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/highscore' component={Highscore} />
    <Route path='/manageQuestions' component={ManageQuestions}/>
    <Route path='/createuser' component={CreateUser} />
</Layout>;
