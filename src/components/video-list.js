import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions';

// This component renders each embedded video and puts that video into the video list

class VideoListShow extends Component {
  renderVideos() {
    const videosArray = this.props.videos;
    return videosArray.map(video => {
      const url = `https://www.youtube.com/embed/${video.id.videoId}`;
      return (
        <li
          style={{ marginBottom: 10 }}
          className="video-list-item"
          key={video.id.videoId}
        >
          <div>
            <iframe
              className="embed-responsive-item"
              width={280}
              height={160}
              src={url}
              allowFullScreen={true}
            />
          </div>
          <div>{video.snippet.title}</div>
        </li>
      );
    });
  }

  render() {
    if (!this.props.videos.length) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="transparent" id="rcorners-vid-head">
          <h3 className="video-header">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAjV_z5lvi7bBorCSbh0KkByO9E2D0YTI7G4AM49ypwWdpF4DVideos" /> */}
            <strong> Related Videos </strong>
            {/* <hr /> */}
          </h3>
        </div>
        <ul
          className="video-list-group video-back-block"
          id="rcorners-vid-list-block"
        >
          {this.renderVideos()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoListShow);
