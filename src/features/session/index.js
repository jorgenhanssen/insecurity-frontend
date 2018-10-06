import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import Login from './Login/index';
import Register from './Register/index';
import NotFound from './404/index';



const mapDispatchToProps = {
  fetchUser: actions.fetchUser
}

function mapStateToProps(state) {
  const { session, feedback } = state;
  return {
    session,
    feedback
  }
}

// Components
export default {
  Login: connect(mapStateToProps, mapDispatchToProps)(Login),
  Register: connect(mapStateToProps, mapDispatchToProps)(Register),
  NotFound
};

export {
  actions,
  sagas,
  reducer
}