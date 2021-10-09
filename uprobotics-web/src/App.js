
import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import Header from './components/Header'

import Post from './pages/Post'
import Categoria from './pages/Categoria'
import Create from './pages/Create'
import Tutorial from './pages/Tutorial'

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/tutorial'>
          <Tutorial />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
     
    </Router>
  )
}

export default App