import { combineReducers } from "redux";
import EventListShow from './event-list';
import VideoListShow from './video-list';

/* This combines all the other reducers into one reducer */


const rootReducer = combineReducers({
  events: EventListShow,
  videos: VideoListShow
});




export default rootReducer;