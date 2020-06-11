import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Container.module.scss';

const Container = ({ element, className, children, ...rest }) => {
  const Element = element !== '' ? element : 'section';
  const ClassNames = className !== '' ? ` ${className}` : '';

  return (
    <Element className={`${styles.wrapper}${ClassNames}`} {...rest}>
      {children}
    </Element>
  );
};

Container.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  element: 'div',
  className: '',
};

export { Container };
