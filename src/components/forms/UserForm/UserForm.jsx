import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';
import styles from './UserForm.scss';

const UserForm = ({ fields, isLoading, onSubmit, buttonLabel }) => (
  <form onSubmit={onSubmit}>
    {fields.map((f, i) => (
      <TextField
        key={i}
        label={f.label}
        type={f.type}
        placeholder={f.placeholder}
        value={f.value}
        className={styles.input}
        onChange={f.onChange}
        error={f.error}
        required={f.required}
      />
    ))}

    <Button className={styles.button} isLoading={isLoading} >{buttonLabel}</Button>
  </form>
);

UserForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

export default UserForm;
