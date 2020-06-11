import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HorizontalList.module.scss';

const HorizontalList = ({ element, className, children, spacing, ...rest }) => {
  const Element = element !== '' ? element : 'ul';
  const ClassNames = className !== '' ? ` ${className}` : '';
  const SmallSpacing = spacing === 'small' ? ` ${styles.small}` : '';
  const MediumSpacing = spacing === 'medium' ? ` ${styles.medium}` : '';
  const LargeSpacing = spacing === 'large' ? ` ${styles.large}` : '';

  return (
    <Element
      className={`${styles.wrapper}${SmallSpacing}${MediumSpacing}${LargeSpacing}${ClassNames}`}
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
  spacing: PropTypes.string,
};

HorizontalList.defaultProps = {
  element: 'ul',
  className: '',
  spacing: '',
};

export { HorizontalList };
