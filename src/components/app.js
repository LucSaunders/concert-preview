import React from "react";
import { Component } from "react";

import EventListShow from "./event-list";
import VideoListShow from "./video-list";
import SearchBar from './searchbar';

/* Render the event-list and video-list components 
   Do the page layout in this component */

export default class App extends Component {
  render() {
    return (
      <div>
        
        <EventListShow />
        
      </div>
    );
  }
}