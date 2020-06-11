import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BreakoutContainer.module.scss';

const BreakoutContainer = ({ element, className, children, ...rest }) => {
  const Element = element !== '' ? element : 'section';
  const ClassNames = className !== '' ? ` ${className}` : '';

  return (
    <Element className={`${styles.wrapper}${ClassNames}`} {...rest}>
      {children}
    </Element>
  );
};

BreakoutContainer.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BreakoutContainer.defaultProps = {
  element: 'div',
  className: '',
};

export { BreakoutContainer };
