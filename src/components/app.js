import React from 'react';
import { Component } from 'react';

import EventListShow from './event-list';
import VideoListShow from './video-list';
import SearchBar from './searchbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* Render the event-list and video-list components
  Do the page layout in this component */

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* <Header branding="Contact Manager" /> */}
            <SearchBar />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-md-8 "> */}
            {/* <span className="evnt-lister"> */}
            <h2 className="evt-list-head">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAjV_z5lvi7bBorCSbh0KkByO9E2D0YTI7G4AM49ypwWdpF4D"
                width="30"
                height="30"
              />
              Live Music Events This Week
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAjV_z5lvi7bBorCSbh0KkByO9E2D0YTI7G4AM49ypwWdpF4D"
                width="30"
                height="30"
              />
            </h2>
            {/* </span> */}

            {/* </span> */}
          </div>
          <div className="row">
            <div className="col-md-8 ">
              <div className="event-back-block" id="rcorners-evt-block">
                <EventListShow />
              </div>
            </div>
            <div className="col-md-4">
              <VideoListShow padding-right="4 rem" />
            </div>
            {/* <div className="col-sm-1">.</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
