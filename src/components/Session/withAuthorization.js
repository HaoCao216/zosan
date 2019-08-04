import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

import AuthUserContext from './context';


const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const { firebase, history } = this.props
      this.listener = firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            history.push(ROUTES.SIGNIN);
          }
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;