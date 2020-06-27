import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../../MediaObject.module.scss';

const Body = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.body, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Body.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Body.defaultProps = {
  element: 'div',
};

export { Body };
