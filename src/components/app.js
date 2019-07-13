import React from 'react';
import { Component } from 'react';

import EventListShow from './event-list';
import VideoListShow from './video-list';
import SearchBar from './searchbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* Render the event-list and video-list components
  (Page layout) */

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <SearchBar />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 ">
              {/* <span className="evnt-lister"> */}
              <h2 className="text-center">
                {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0E61uf4R8U4ZQdJa0ocOzE49KMQ1NDCUaVPEad4Lh88XN5cHu"
                  width="30"
                  height="30"
                /> */}
                <strong>
                  <span className="lightgrey-letters">Live</span>
                  <span className="pink-letters"> Music Events </span>
                  <span className="lightgrey-letters">This Week</span>
                  {/* <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0E61uf4R8U4ZQdJa0ocOzE49KMQ1NDCUaVPEad4Lh88XN5cHu"
                    width="30"
                    height="30"
                  /> */}
                </strong>
              </h2>
            </div>
            <div className="col-md-4">.</div>
          </div>
          <div className="row">
            <div className="col-md-8 ">
              <div className="transparent" id="rcorners-evt-block">
                <EventListShow />
              </div>
            </div>
            <div className="col-md-4">
              <VideoListShow padding-right="4 rem" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
