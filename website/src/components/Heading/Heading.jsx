import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.module.scss';

const Heading = ({ level, element, className, children, ...rest }) => {
  const Element = element === '' ? `h${level}` : element;
  const classes = classNames(styles[`h${level}`], className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  element: '',
  className: '',
  level: 2,
};

export { Heading };
