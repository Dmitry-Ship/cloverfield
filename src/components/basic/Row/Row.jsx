import React, { PropTypes } from 'react';

const Row = ({ children,
               align,
               wrap,
               auto,
               className }) => {
  const style = {
    display: 'flex',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: align.split(' ')[0],
    alignItems: align.split(' ')[1] || 'center',
    flex: auto ? 'auto' : 'none',
  };

  return (
    <div style={style} className={className} >
      {children}
    </div>
  );
};

export default Row;

Row.defaultProps = {
  auto: true,
  wrap: false,
  align: 'space-around center',
  className: '',
};

Row.propTypes = {
  className: PropTypes.string,
  align: PropTypes.string,
  wrap: PropTypes.bool,
  auto: PropTypes.bool,
};
