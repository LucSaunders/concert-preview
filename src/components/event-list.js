import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
           color: 'black'
         }}
         className="event-list-item"
         key={event.id}
       >
         <div>
           <h5 style={{cursor: 'pointer'}} onClick={() =>
              this.props.fetchVideos(
                this.props.events.performers
                  ? this.props.events.performers.performer[0].name
                  : event.title
                )
              }
            >
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
      return <h3 style={{textAlign: 'center', marginTop: 30}}>Loading...</h3>
    }

    return (
      <div>
        <h2>Live Music Events This Week</h2>
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
