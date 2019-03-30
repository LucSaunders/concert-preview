import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // const { branding } = props;
    this.state = {
      term: ''
    };
  }

  // handleChange(evt) {
  /******************************************************
    Get the evt.target.name (which will be either "city" or "dateRange") and use it to target the key on the `state` object with the same name, using bracket syntax.
    (https://medium.com/@tmkelly28/handling-multiple-form-inputs-in-react-c5eb83755d15)
    ******************************************************/
  // this.setState({ [evt.target.name]: evt.target.value });

  onInputChange = term => {
    this.setState({ term });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchEvents(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      //   <nav className="navbar navbar-light mb-3 py-0 justify-content-center fixed-top">
      //     <header className="align-content-center">
      //       {/* <div className="container">
      //  {/* <label>
      //      <i class="fas fa-guitar" />{' '}
      //    </label> */}
      //       {/* <a href="/" className="navbar-brand">
      //      <i className="fas fa-guitar"></i>
      //    </a>
      //    </div> */}
      //       <div className="row">
      //         <div className="col-md-6" id="branding">
      //           First Listen
      //         </div>
      //         <div className="col-md-6">
      //           <form onSubmit={this.onFormSubmit} className="input-group">
      //             <input
      //               placeholder="Find music events by location"
      //               className="form-control"
      //               value={this.state.term}
      //               size={30}
      //               onChange={event => this.onInputChange(event.target.value)}
      //             />
      //             <span className="input-group-btn">
      //               <button type="submit" className="btn btn-outline-light">
      //                 Go
      //               </button>
      //             </span>
      //           </form>
      //         </div>
      //       </div>
      //     </header>
      //   </nav>
      <nav className="navbar navbar-expand-sm navbar-light mb-3 py-0 justify-content-center fixed-top">
        {/* <header className="align-content-center"> */}
        <div className="container">
          <div>
            <a class="navbar-brand ml-auto" href="#">
              <p className="brandNameFirstLetter">
                F<span id="brandNameFirstWord">irst</span>
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIBausz08TcYHT7sXK0k-04in0JnLokP1X1oBJKq_bcOmlze39A"
                    width="50"
                    height="50"
                    alt=""
                  />
                </span>
                <span className="brandNameFirstLetterSecondWord">L</span>
                <span id="brandNameSecondWord">isten</span>
              </p>
            </a>
          </div>
          {/* <div>
            <a>
              <img
                src="https://cdn5.vectorstock.com/i/thumbs/33/04/sound-wave-icon-white-vector-15943304.jpg"
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWAMnAKdJVdrT4u7yQ6VeMlmV17sSCndhglu1aiWHBXsQ7riJAw"
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4XFNWQOEJVKvDaX3iqAkj3pKNhUUZMUVIYHN2r8yPDFmbkPf"
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4Nvnenk6DkQfEbG7f7PCrIafeeaC8q-gKFHtn81QGbGAO9IV"
                width="60"
                height="60"
                alt=""
              />
            </a>
          </div> */}
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className="navbar-brand">
                <img
                  src="https://c7.uihere.com/files/740/847/704/orange-thumb-finger-hand-font-garageband-thumb.jpg"
                  //  className="fas fa-guitar"
                />
                
              </a>
            </li>
          </ul> */}
          {/* <a href="#" className="navbar-brand">
            <i className="fas fa-guitar" />
            First Listen
          </a>
          <i className="fas fa-guitar" /> */}
          {/* <div className="navbar-nav mx-auto"> */}
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Find music events by location"
              className="form-control"
              value={this.state.term}
              size="40"
              onChange={event => this.onInputChange(event.target.value)}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-outline-light">
                Go
              </button>
            </span>
          </form>
          {/* </div> */}
          <div>
            <ul className="navbar-nav">
              <li className="nav-item mr-auto">
                <a href="#" className="nav-link">
                  <i className="fas fa-home" />
                </a>
              </li>

              <li className="nav-item mr-auto">
                <a href="#" className="nav-link">
                  <i className="fas fa-question" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* </header> */}
      </nav>
    );
  }
}

// SearchBar.defaultProps = {
//   branding: 'My App'
// };

// SearchBar.propTypes = {
//   branding: PropTypes.string.isRequired
// };

// export default Header;
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
