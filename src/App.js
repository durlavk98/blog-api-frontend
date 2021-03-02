import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import PostList from './components/postList';
import ShowPost from './components/showPost';
import HomePage from './components/homePage';

function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <br/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/posts' component={PostList}/>
        <Route exact path='/posts/:id' component={ShowPost}/>
      </>
    </Router>
  );
}

export default App;