import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Forecast from './Forecast';
import Details from './Details';
import Error from './Error';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details/:city' component={Details}/>
            <Route render={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
