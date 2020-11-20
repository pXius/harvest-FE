import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './css/App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';

// Import pages

import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import PostsPage from './components/posts/PostsPage';
// import ChatPage from './components/chat/ChatPage';
import NewPosts from './components/posts/NewPosts';
import SinglePost from './components/posts/SinglePost';
import ThreadPagedefunct from './components/chat/ThreadPagedefunct';
import ChatPagedefunt from './components/chat/ChatPagedefunt';
import CommentsPage from './components/comments/CommentsPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  // const [loggedIn, setLoggedIn] = useState(true);

  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
          <div className="row" />
          <Switch>
            <Route path="/posts" exact>
              <PostsPage />
            </Route>

            <Route path="/comments" exact>
              <CommentsPage />
            </Route>

            <Route path="/posts/new">
              <NewPosts />
            </Route>

            <Route path="/posts/:id">
              <SinglePost />
            </Route>

            <Route path="/chat" exact>
              <ThreadPagedefunct />
            </Route>

            <Route path="/chat/:id">
              <ChatPagedefunt />
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
