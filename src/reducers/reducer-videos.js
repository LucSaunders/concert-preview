import { FETCH_VIDEOS } from "../actions";

/* Reducer for the videos list */

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEOS:
    return [...action.payload.data.items];
    default:
      return state;
  }
}