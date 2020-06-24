import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HorizontalList.module.scss';

const HorizontalList = ({ element, className, children, spacing, ...rest }) => {
  const Element = element;

  return (
    <Element
      className={`${styles.wrapper} ${
        spacing === '' ? '' : styles[spacing]
      } ${className}`}
      {...rest}
    >
      {children}
    </Element>
  );
};

HorizontalList.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(['base', 'small', 'medium', 'large']),
};

HorizontalList.defaultProps = {
  element: 'ul',
  className: '',
  spacing: '',
};

export { HorizontalList };
