import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../actions';
import 'font-awesome/css/font-awesome.css'

class SearchBar extends Component {
 constructor(props) {
   super(props);
   this.state = {
     term: '',
   };
 }

 // handleChange(evt) {
 /******************************************************
    Get the evt.target.name (which will be either "city" or "dateRange") and use it to target the key on the `state` object with the same name, using bracket syntax.
    (https://medium.com/@tmkelly28/handling-multiple-form-inputs-in-react-c5eb83755d15)
    ******************************************************/
 // this.setState({ [evt.target.name]: evt.target.value });

 onInputChange = (term) => {
   this.setState({ term });
 }

 onFormSubmit = (e) => {
   e.preventDefault();
   this.props.fetchEvents(this.state.term);
   this.setState({ term: '' });
 }

 render() {
   return (
     <header>
     <div className="container">
     <label>
         <i class="fas fa-guitar" />{' '}
       </label>
       <a href="/" className="navbar-brand">
         <i className="fas fa-guitar"></i>
       </a>
       </div>
     <form onSubmit={this.onFormSubmit} className="input-group">
       <input
         placeholder="Find music events by location"
         className="form-control"
         value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)}
       />
       <span className="input-group-btn">
         <button type="submit" className="btn btn-info">
           Go
         </button>
       </span>
     </form>
     </header>
   );
 }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchEvents }, dispatch);
}
export default connect(
 null,
 mapDispatchToProps
)(SearchBar);
