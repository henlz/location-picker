import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {fetchLocations} from "../../state/actions/LocationActions";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return (
      <ul>
        {this.props.locations.map(location => (
          <li key={location.country}>
            {location.country}
          </li>
        ))}
      </ul>
    );
  }
}

HomePage.propTypes = {
  locations: PropTypes.any,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    locations: state.location.locations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLocations: bindActionCreators(fetchLocations, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
