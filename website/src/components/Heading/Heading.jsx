import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Heading.module.scss';

const Heading = ({ size, element, className, children, ...rest }) => {
  const H1 = size === 1 ? styles.h1 : '';
  const H2 = size === 2 ? styles.h2 : '';
  const H3 = size === 3 ? styles.h3 : '';
  const H4 = size === 4 ? styles.h4 : '';
  const H5 = size === 5 ? styles.h5 : '';
  const H6 = size === 6 ? styles.h6 : '';
  const Element =
    element === ''
      ? size === 1
        ? 'h1'
        : size === 2
        ? 'h2'
        : size === 3
        ? 'h3'
        : size === 4
        ? 'h4'
        : size === 5
        ? 'h5'
        : 'h6'
      : element;
  const ClassNames = className !== '' ? ` ${className}` : '';

  return (
    <Element
      className={`${H1}${H2}${H3}${H4}${H5}${H6}${ClassNames}`}
      {...rest}
    >
      {children}
    </Element>
  );
};

Heading.propTypes = {
  size: PropTypes.number.isRequired,
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  element: '',
  className: '',
};

export { Heading };
