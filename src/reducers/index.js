import { combineReducers } from "redux";
import EventListShow from "./reducer-events";
import VideoListShow from "./reducer-videos";

/* This combines all the other reducers into one reducer */

const rootReducer = combineReducers({
  events: EventListShow,
  videos: VideoListShow
});

export default rootReducer;