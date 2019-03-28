import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchEvents } from "../actions";

class EventListShow extends Component {
  componentDidMount() {
    this.props.fetchEvents('Raleigh');
  }

  renderEvents() {
    console.log(this.props.events)
    const eventsArray = this.props.events;
    return eventsArray.map(event => {
      return (
        <li style={{marginBottom: 10}} className="event-list-item" key={event.id}>          
          <div>{event.title} - {event.city_name}, {event.region_name}</div>          
          <div>{event.venue_name} - {event.start_time}</div>
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
        <h3>Events</h3>
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
  return bindActionCreators({ fetchEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListShow);

