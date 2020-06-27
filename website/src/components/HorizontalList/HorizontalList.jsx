import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Item } from './components';
import styles from './HorizontalList.module.scss';

const HorizontalList = ({ element, className, children, spacing, ...rest }) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    spacing && styles[spacing],
    className,
  );

  return (
    <Element className={classes} {...rest}>
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
};

HorizontalList.Item = Item;

export { HorizontalList };
