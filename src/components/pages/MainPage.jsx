import React, { PropTypes, Component } from 'react';

import { page } from './MainPage.styl';

import Page from '../basic/Page';
import CreationFormContainer from '../../containers/CreationFormContainer';
import NotesListContainer from '../../containers/NotesListContainer';

// const MainPage = ({ params }) => (
//   <Page className={page}>
//     <CreationFormContainer />
//     <NotesListContainer params={params} />
//   </Page>
// );
//
// export default MainPage;

export default class MainPage extends Component {
  render() {
    const { params } = this.props;
    return (
      <Page className={page}>
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
