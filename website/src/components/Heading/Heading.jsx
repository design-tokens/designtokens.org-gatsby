import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Heading.module.scss';

const Heading = ({ level, element, className, children, ...rest }) => {
  const Element = element === '' ? `h${level}` : element;

  return (
    <Element className={`${styles[`h${level}`]} ${className}`} {...rest}>
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
  level: 2,
  className: '',
};

export { Heading };
