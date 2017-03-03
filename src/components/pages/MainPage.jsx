import React, { PropTypes, Component } from 'react';

import Page from '../basic/Page';
import CreationFormContainer from '../../containers/CreationFormContainer';
import NotesListContainer from '../../containers/NotesListContainer';

export default class MainPage extends Component {
  render() {
    const { params } = this.props;
    return (
      <Page>
        <CreationFormContainer />
        <NotesListContainer params={params} />
      </Page>
    );
  }
}

// MainPage.defaultProps = {
//   params: '',
// };
//
// MainPage.propTypes = {
//   params: PropTypes.string,
// };
