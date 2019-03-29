import { FETCH_EVENTS } from "../actions";

// Reducer for the event list. Checks to verify you got results back from your search

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      if(action.payload.data.events) {
        return [...action.payload.data.events.event];
      } else {
        return ["NoResults"];
      }
    default:
      return state;
  }
}