import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile/:userId" component={UserProfilePage} />
        {/* Add more routes as needed */}
      </Switch>
    </div>
  );
}

export default App;
