import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Button.module.scss';

const Button = ({ className, children, type, ...rest }) => {
  const ClassNames = className !== '' ? ` ${className}` : '';

  return (
    <button type={type} className={`${styles.wrapper}${ClassNames}`} {...rest}>
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
