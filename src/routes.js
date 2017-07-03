import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Welcome from './pages/Welcome'
import ChatPanel from './pages/ChatPanel'
import App from './pages/App'

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Welcome} />
     <Route path="/Chat" component={ChatPanel}>
        <Route path="profile" />
     </Route>
  </Route>

);
