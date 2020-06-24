import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Column } from './components';
import * as styles from './Grid.module.scss';

const Grid = ({
  element,
  spacing,
  className,
  fit,
  full,
  divideBy,
  children,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    fit && styles.fit,
    full && styles.full,
    divideBy && styles[`divide-by-${divideBy}`],
    spacing && styles[spacing],
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Grid.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  fit: PropTypes.bool,
  full: PropTypes.bool,
  divideBy: PropTypes.oneOf([2, 3, 4]),
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(['base', 'small', 'medium', 'large']),
};

Grid.defaultProps = {
  element: 'div',
  className: '',
  fit: false,
  full: false,
  divideBy: '',
  spacing: '',
};

Grid.Column = Column;

export { Grid };
