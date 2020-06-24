import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HolyGrail.module.scss';

const HolyGrailBody = ({ element, spacing, className, children, ...rest }) => {
  const Element = element;

  return (
    <Element
      className={`${styles.body} ${
        spacing === '' ? '' : styles[spacing]
      } ${className}`}
      {...rest}
    >
      {children}
    </Element>
  );
};

HolyGrailBody.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(['base', 'small', 'medium', 'large']),
};

HolyGrailBody.defaultProps = {
  element: 'div',
  className: '',
  spacing: '',
};

export { HolyGrailBody };
