import React from 'react';
import { Component } from 'react';

import EventListShow from './event-list';
import VideoListShow from './video-list';
import SearchBar from './searchbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* Render the event-list and video-list components
  Do the page layout in this component */

export default class App extends Component {
 render() {
   return (
     <div>
       <SearchBar />
       <div className="container">
         <div className="row">
           <div className="col-md-8">
             <EventListShow />
           </div>
           <div className="col-md-4">
             <VideoListShow padding-right="3 rem" />
           </div>
           {/* <div className="col-sm-1">.</div> */}
         </div>
       </div>
     </div>
   );
 }
}
