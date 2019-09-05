import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes';

import Login from './containers/Login'
import SignUp from './containers/SignUp'
import LandingPage from './containers/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { Scrollbars } from 'react-custom-scrollbars';

// import Page404 from 'containers/Page404'
// import Page500 from 'containers/Page500'
function App() {
  return (
    <Router>
      <Header />
      <Scrollbars
        style={{height: 'calc(100vh - 62px)', width: '100%'}}>
        <Switch>
          <Route exact path={ROUTES.SIGNUP} name="SignUp Page" component={SignUp} />
          <Route exact path={ROUTES.SIGNIN} name="Login Page" component={Login} />
          <Route exact path={ROUTES.HOME} name="Landing Page" component={LandingPage} />
          {/* <Route exact path="/404" name="Page 404" component={Page404} /> */}
          {/* <Route exact path="/500" name="Page 500" component={Page500} /> */}
        </Switch>
        <Footer />
      </Scrollbars>
    </Router>
  )
}

export default App;
