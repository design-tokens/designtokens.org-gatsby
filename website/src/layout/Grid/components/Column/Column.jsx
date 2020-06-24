import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Column.module.scss';

const Column = ({ element, className, children, autoSize, ...rest }) => {
  const Element = element;
  const classes = classNames(
    classNames,
    styles.Column,
    autoSize && styles['auto-size'],
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Column.propTypes = {
  element: PropTypes.string,
  autoSize: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Column.defaultProps = {
  element: 'div',
  autoSize: false,
  className: '',
};

export { Column };
