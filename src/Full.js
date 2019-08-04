import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes';

import Login from './containers/Login'
import SignUp from './containers/SignUp'
// import Page404 from 'containers/Page404'
// import Page500 from 'containers/Page500'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.SIGNUP} name="SignUp Page" component={SignUp} />
        <Route exact path={ROUTES.SIGNIN} name="Login Page" component={Login} />
        {/* <Route exact path="/404" name="Page 404" component={Page404} /> */}
        {/* <Route exact path="/500" name="Page 500" component={Page500} /> */}
      </Switch>
    </Router>
  )
}

export default App;
