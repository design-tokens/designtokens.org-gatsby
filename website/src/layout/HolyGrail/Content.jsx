import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HolyGrail.module.scss';

const HolyGrailContent = ({ element, className, children, ...rest }) => {
  const Element = element;

  return (
    <Element className={`${styles.content} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

HolyGrailContent.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HolyGrailContent.defaultProps = {
  element: 'div',
  className: '',
};

export { HolyGrailContent };
