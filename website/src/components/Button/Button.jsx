import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Button.module.scss';

const Button = ({ className, children, type, ...rest }) => {
  return (
    <button type={type} className={`${styles.wrapper} ${className}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  type: 'submit',
};

export { Button };
