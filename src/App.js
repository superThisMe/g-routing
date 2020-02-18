import React from 'react';

import Home from './Home';
import About from './About';
import Profile from './Profile';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      [<Link to="/">Home</Link>]
      [<Link to="/home">Home</Link>]
      [<Link to="/about">About</Link>]
      <br />
      [<Link to="/profile/johndoe?detail=true">John Doe Profile</Link>]
      [<Link to="/profile/janedoe?detail=false">Jane Doe Profile</Link>]
      <hr />
      <Route path={["/", "/home"]} exact={ true } 
             component={ Home } />
      <Route path="/about" exact={ true } 
             component={ About } />
      <Route path="/profile/:username" exact={ true } 
             component={ Profile } />
    </div>
  );
}

export default App;
