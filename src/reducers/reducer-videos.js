import { FETCH_VIDEOS } from "../actions";

/* Reducer for the videos list */

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEOS:
    return state.videos = [ action.payload.data ];
    default:
      return state;
  }
}