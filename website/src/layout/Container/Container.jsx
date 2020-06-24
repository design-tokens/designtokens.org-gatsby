import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Container.module.scss';

const Container = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.wrapper, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Container.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  element: 'div',
  className: '',
};

export { Container };
