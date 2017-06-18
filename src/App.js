import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/home/Home';
import Error from './routes/error/Error';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route component={Error} />
          </Switch>
        </Root>
      </BrowserRouter>
    );
  }
}

export default App;

const Root = (props) => {
  return (
    <div id="root--text-align-center">
      {props.children}
    </div>
  )
}
