import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../actions';
import { fetchVideos } from '../actions';

/* This component renders each event item and places that item into the event
   list on the screen.  Clicking on an event title will fetch videos from the
   YouTube API matching the event performer or title.  On initial load or search
   the video list updates based upon the first returned result */

class EventListShow extends Component {
  componentDidMount() {
    this.props.fetchEvents('Raleigh');
  }

  componentDidUpdate() {
    this.props.events[0].performers
      ? this.props.fetchVideos(
          Array.isArray(this.props.events[0].performers)
            ? this.props.events[0].performers.performer[0].name
            : this.props.events[0].performers.performer.name
        )
      : this.props.fetchVideos(this.props.events[0].title);
  }

  renderEvents() {
    const eventsArray = this.props.events;
    return eventsArray.map(event => {
      return (
        <li
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            // marginBottom: 10,
            color: 'black'
          }}
          className="event-list-item"
          key={event.id}
        >
          <div>
            <h5
              style={{ cursor: 'pointer' }}
              onClick={() =>
                event.performers
                  ? this.props.fetchVideos(
                      Array.isArray(event.performers.performer)
                        ? event.performers.performer[0].name
                        : event.performers.performer.name
                    )
                  : this.props.fetchVideos(event.title)
              }
            >
              <span className="eventTitle">
                <strong>{event.title}</strong>
              </span>{' '}
              - {event.venue_name}
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
    if (!this.props.events.length) {
      return <h3 style={{ textAlign: 'center', marginTop: 30 }}>Loading...</h3>;
    } else if (this.props.events[0] === 'NoResults') {
      return (
        <h3 style={{ textAlign: 'center', padding: 30 }}>
          No results match your search
        </h3>
      );
    }

    return (
      <div>
        <ul className="event-list-group">{this.renderEvents()}</ul>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventListShow);
