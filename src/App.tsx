import * as React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';

/**
 * Home function
 * @return {jsx}
 */
export const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
