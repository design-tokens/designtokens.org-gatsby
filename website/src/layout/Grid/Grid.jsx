import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Grid.module.scss';

const Grid = ({
  element,
  spacing,
  className,
  fit,
  divideBy,
  children,
  ...rest
}) => {
  const Element = element;

  return (
    <Element
      className={`${styles.wrapper} ${fit === true ? styles.fit : ''} ${
        divideBy === '' ? '' : styles[`divide-by-${divideBy}`]
      } ${spacing === '' ? '' : styles[spacing]} ${className}`}
      {...rest}
    >
      {children}
    </Element>
  );
};

Grid.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  fit: PropTypes.bool,
  divideBy: PropTypes.oneOf([1, 2, 3, 4]),
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(['base', 'small', 'medium', 'large']),
};

Grid.defaultProps = {
  element: 'div',
  className: '',
  fit: false,
  divideBy: '',
  spacing: '',
};

export { Grid };
