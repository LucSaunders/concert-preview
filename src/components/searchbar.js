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
    // this.props
    fetchEvents(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light mb-3 py-0 justify-content-center fixed-top">
        <div className="container">
          <div>
            <a className="navbar-brand ml-auto" href="#">
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
