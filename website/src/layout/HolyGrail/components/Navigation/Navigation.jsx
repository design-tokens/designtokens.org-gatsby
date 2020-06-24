import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Navigation.module.scss';

const Navigation = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.wrapper, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Navigation.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Navigation.defaultProps = {
  element: 'div',
  className: '',
};

export { Navigation };
