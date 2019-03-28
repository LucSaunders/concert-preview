import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "../actions";

// This component renders each video and puts that video into the video list 

class VideoListShow extends Component {
  componentDidMount() {
    this.props.fetchVideos('Marshmello');
  }

  renderVideos() {
    const videosArray = this.props.videos;
    return videosArray.map(video => {
      const url = `https://www.youtube.com/embed/${video.id.videoId}`;
      return (
        <li style={{marginBottom: 10}} className="video-list-item" key={video.id.videoId}>          
          <div >
            <iframe className="embed-responsive-item" width={360} height={240} src={url} allowFullScreen={true}/>
          </div>
          <div>{video.snippet.title}</div>
        </li>
      );
    });
  }

  render() {
    if(!this.props.videos.length) {
      return <div>No Related Videos For This Event</div>
    }

    return (
      <div>
        <h3>Videos</h3>
        <ul className="video-list-group">
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoListShow);