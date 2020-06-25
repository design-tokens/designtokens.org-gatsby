import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Button.module.scss';

const Button = ({ className, children, type, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <button type={type} className={classes} {...rest}>
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
