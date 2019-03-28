import axios from "axios";

/* Holds the functions to fetch the data from the APIs and the API keys */

export const FETCH_EVENTS = "fetch_events";
export const FETCH_VIDEOS = "fetch_videos";

const EVENT_ROOT_URL = "https://api.eventful.com/json/events/search?...";
const EVENT_API_KEY = "&app_key=Ht6BZQzTjbkk8Gxk";
const VIDEO_ROOT_URL = "https://www.googleapis.com/youtube/v3/search";
const VIDEO_API_KEY = "&key=AIzaSyAaExaRBOtyvu4QxGvJ8mMAwrnEVz_6KsQ";

export function fetchEvents() {
  const request = axios.get(`${EVENT_ROOT_URL}&q=music&location=raleigh${EVENT_API_KEY}`);

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}

export function fetchVideos() {
  const request = axios.get(`${VIDEO_ROOT_URL}&part=snippet&q=music&type=video${VIDEO_API_KEY}`);

  return {
    type: FETCH_VIDEOS,
    payload: request
  };
}