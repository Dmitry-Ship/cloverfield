import React, { PropTypes } from 'react';

import styles from './ColorMenu.styl';

import PopUpMenu from '../basic/PopUpMenu';
import Icon from '../basic/Icon';

const ColorMenu = ({ color, onSetColor, className }) => {
  const colors = ['white', 'red', 'orange', 'yellow', 'grey', 'blue', 'teal', 'green'];

  const circles = colors.map((item, i) => {
    const chosen = item === color ? styles.chosen : '';
    return (
      <span
        onClick={() => onSetColor(item)}
        key={i}
        className={`${styles[item]} ${chosen}`}
      />
    );
  });

  return (
    <Icon
      className={`${styles.colorMenu} ${className}`}
      name="palette"
    >
      <PopUpMenu className={styles.popupMenu} >
        <div className={styles.palette}>
          {circles}
        </div>
      </PopUpMenu>
    </Icon>
  );
};

export default ColorMenu;

ColorMenu.defaultProps = {
  color: 'white',
};

ColorMenu.propTypes = {
  color: PropTypes.string.isRequired,
  onSetColor: PropTypes.func.isRequired,
  className: PropTypes.string,
};
