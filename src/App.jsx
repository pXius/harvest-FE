import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './css/App.css';
import harvest from '/Users/haleemathsameena/Documents/Harvest/harvest-FE/src/harvest.png'

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';

// Import pages

import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import PostsPage from './components/posts/PostsPage';
import ChatPage from './components/chat/ChatPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
      <div className ="image"img src={harvest} alt= "image "/>
        <Switch>
          <Route path="/posts">
            <PostsPage />
          </Route>

          <Route path="/chat">
            <ChatPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
