import { FETCH_EVENTS } from "../actions";

/* Reducer for the event list */

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
    return state.events = [ action.payload.data ];
    default:
      return state;
  }
}