import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/app.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import ComoFunciona from './pages/Teams';
import Faq from './pages/Teams';
import Tutorial from './pages/Teams';
import Download from './pages/Teams';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quemsomos' component={QuemSomos} />
          <Route path='/comofunciona' component={ComoFunciona} />
          <Route path='/faq' component={Faq} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/download' component={Download} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
