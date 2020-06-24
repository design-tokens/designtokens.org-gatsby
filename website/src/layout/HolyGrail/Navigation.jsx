import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HolyGrail.module.scss';

const HolyGrailNavigation = ({ element, className, children, ...rest }) => {
  const Element = element;

  return (
    <Element className={`${styles.navigation} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

HolyGrailNavigation.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HolyGrailNavigation.defaultProps = {
  element: 'div',
  className: '',
};

export { HolyGrailNavigation };
