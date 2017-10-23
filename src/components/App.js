import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Forecast from './Forecast';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route render={() => {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
