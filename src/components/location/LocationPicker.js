import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {debounce} from 'throttle-debounce';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';

import {fetchLocations, clearLocations} from "../../state/actions/LocationActions";
import TextField from "../form/TextField";
import LocationResults from "./LocationResults";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

class LocationPicker extends Component {
  constructor(props, context) {
    super(props, context);

    this.searchField = '';

    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(newValue) {
    this.searchField = newValue;
    if (this.searchField.length > 2) {
      debounce(3000, this.props.fetchLocations(this.searchField));
    } else {
      this.props.clearLocations();
    }
  }

  render() {
    return (
      <Container>
        <TextField value={this.searchField}
                   label={'Pick Up Location'}
                   placeholder={'city, airport, station, region and district...'}
                   onChange={this.onChangeSearch}/>
        <LocationResults locations={this.props.locations}/>
      </Container>
    );
  }
}

LocationPicker.propTypes = {
  locations: PropTypes.any,
  actions: PropTypes.object,
  clearLocations: PropTypes.func
};

function mapStateToProps(state) {
  return {
    locations: state.location.locations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLocations: (searchText) => dispatch(fetchLocations(searchText)),
    clearLocations: bindActionCreators(clearLocations, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPicker);
