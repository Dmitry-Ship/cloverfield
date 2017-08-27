import React from 'react';

import styles from './ResetPasswordPage.scss';

import ResetPasswordFormContainer from 'containers/ResetPasswordFormContainer';

const ResetPasswordPage = () => (
  <div className={styles.page}>
    <div className={styles.card} >
      <ResetPasswordFormContainer token={this.props.params.token} />
    </div>
  </div>
);

export default ResetPasswordPage;

