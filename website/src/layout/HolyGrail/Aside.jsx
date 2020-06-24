import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HolyGrail.module.scss';

const HolyGrailAside = ({ element, className, children, ...rest }) => {
  const Element = element;

  return (
    <Element className={`${styles.aside} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

HolyGrailAside.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HolyGrailAside.defaultProps = {
  element: 'div',
  className: '',
};

export { HolyGrailAside };
