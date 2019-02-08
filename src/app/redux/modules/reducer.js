import {combineReducers} from "redux";
import notes from './notes';
import message from './message';

export default combineReducers({
   notes,
   message
});