import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from 'actions/noteActions';
import GeneralInfoCard from 'components/GeneralInfoCard';
import { getAllNotes, getAllTags, getAllImages } from 'selectors/noteSelectors';

const mapStateToProps = store => ({
  notes: getAllNotes(store).length,
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
