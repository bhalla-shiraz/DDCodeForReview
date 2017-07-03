import {combineReducers} from 'redux';
import loginData from './loginData';
import navigate from './navigate'
import roomDetails from './roomDetails'
import roomList from './roomList'
import profile from './profile'

const rootReducer = combineReducers({
  loginData,
  navigate,
  roomDetails,
  roomList,
  profile,
});

export default rootReducer;
