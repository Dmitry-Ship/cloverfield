import React, { Component } from 'react';

import { page, card } from './ResetPasswordPage.scss';

import Page from '../basic/Page';
import Card from '../basic/Card';

import ResetPasswordFormContainer from '../../containers/ResetPasswordFormContainer';

export default class ResetPasswordPage extends Component {
  render() {
    return (
      <Page className={page}>
        <Card className={card} >
          <ResetPasswordFormContainer token={this.props.params.token} />
        </Card>
      </Page>
    );
  }
}

