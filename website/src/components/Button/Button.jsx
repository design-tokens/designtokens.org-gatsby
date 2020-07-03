import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ className, children, type, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    // TODO: re-enable when this issue is fixed https://github.com/yannickcr/eslint-plugin-react/issues/1846
    // eslint-disable-next-line react/button-has-type
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
  className: null,
  type: 'submit',
};

export { Button };
