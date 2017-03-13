import React, { Component } from 'react';

import { page, card } from './ResetPasswordPage.scss';

import ResetPasswordFormContainer from '../../../containers/ResetPasswordFormContainer';

export default class ResetPasswordPage extends Component {
  render() {
    return (
      <div className={page}>
        <div className={card} >
          <ResetPasswordFormContainer token={this.props.params.token} />
        </div>
      </div>
    );
  }
}

