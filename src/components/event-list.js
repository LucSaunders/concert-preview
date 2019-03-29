import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchEvents } from "../actions";
import { fetchVideos } from "../actions";

class EventListShow extends Component {
  componentDidMount() {
    this.props.fetchEvents('Raleigh');
  }

  renderEvents() {
   const eventsArray = this.props.events;
   return eventsArray.map(event => {
     return (
       <li
         style={{
           paddingTop: 15,
           paddingBottom: 10,
           marginBottom: 10,
           cursor: 'pointer',
           color: 'black'
           // marginRight: '1rem'
         }}
         className="event-list-item"
         key={event.id}
         onClick={() =>
           this.props.fetchVideos(
             this.props.events.performers
               ? this.props.events.performers.performer[0].name
               : event.title
           )
         }
       >
         <div>
           <h5>
             <strong>{event.title}</strong> - {event.venue_name}
           </h5>
         </div>
         <div>
           {event.city_name}, {event.region_name} - {event.start_time}
         </div>
         <hr />
       </li>
     );
   });
 }

  render() {
    if(!this.props.events.length) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>Events This Week</h2>
        <ul className="event-list-group">
          {this.renderEvents()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { events: state.events };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents, fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListShow);
