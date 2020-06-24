import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HolyGrail.module.scss';

const HolyGrail = ({ element, className, children, ...rest }) => {
  const Element = element;

  return (
    <Element className={`${styles.wrapper} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

HolyGrail.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HolyGrail.defaultProps = {
  element: 'div',
  className: '',
};

export { HolyGrail };
