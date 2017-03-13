import React, { Component } from 'react';

import { page } from './MainPage.scss';
import CreationFormContainer from '../../../containers/CreationFormContainer';
import NotesListContainer from '../../../containers/NotesListContainer';

export default class MainPage extends Component {
  render() {
    const { params } = this.props;
    return (
      <div className={page} >
        <CreationFormContainer />
        <NotesListContainer params={params} />
      </div>
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
