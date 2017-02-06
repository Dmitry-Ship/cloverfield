import React, { PropTypes } from 'react';

import Button from '../Button';

const Form = ({ action,
                onChange,
                onSubmit,
                children,
                buttonClass,
                className }) => (
  <form
    action={action}
    className={className}
    onSubmit={onSubmit}
    onChange={onChange}
  >
    {children}
    <Button type="submit" className={buttonClass} />
  </form>
);

export default Form;

Form.defaultProps = {
  className: '',
};

Form.propTypes = {
  className: PropTypes.string,
  action: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any,
};
