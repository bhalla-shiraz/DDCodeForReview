import {combineReducers} from 'redux';
import loginData from './loginData';
import navigate from './navigate'
import roomDetails from './roomDetails'
import roomList from './roomList'

const rootReducer = combineReducers({
  loginData,
  navigate,
  roomDetails,
  roomList
});

export default rootReducer;
