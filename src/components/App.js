import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import TodoContainer from '../containers/TodoContainer';
import './App.css';

const App = () => {
	  return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                      <TodoContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
    )
}

export default App;