import React, { PropTypes } from 'react';

const Form = ({ action,
                onChange,
                onSubmit,
                children,
                className }) => (
  <form
    action={action}
    className={className}
    onSubmit={onSubmit}
    onChange={onChange} >{children}</form>
)

export default Form;

Form.propTypes = {
  className: PropTypes.string,
  action: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.any,
}
