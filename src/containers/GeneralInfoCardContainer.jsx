import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';
import GeneralInfoCard from '../components/GeneralInfoCard';
import { getVisibleNotes, getAllTags, getAllImages } from '../reducers/noteReducer';

const mapStateToProps = store => ({
  notes: getVisibleNotes(store).length,
  tags: getAllTags(store).length,
  images: getAllImages(store).length,
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

class GeneralInfoCardContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <GeneralInfoCard {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfoCardContainer);
