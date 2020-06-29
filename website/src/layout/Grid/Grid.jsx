import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Column } from './components';
import styles from './Grid.module.scss';

const Grid = ({
  element,
  full,
  smallFit,
  mediumFit,
  largeFit,
  xLargeFit,
  xXLargeFit,
  divideBy,
  alignItems,
  spacing,
  children,
  className,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    full && styles.full,
    smallFit && styles.smallFit,
    mediumFit && styles.mediumFit,
    largeFit && styles.largeFit,
    xLargeFit && styles.xLargeFit,
    xXLargeFit && styles.xxLargeFit,
    divideBy && styles[`divide-by-${divideBy}`],
    alignItems && styles[`wrapper${alignItems}`],
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
  full: PropTypes.bool,
  smallFit: PropTypes.bool,
  mediumFit: PropTypes.bool,
  largeFit: PropTypes.bool,
  xLargeFit: PropTypes.bool,
  xXLargeFit: PropTypes.bool,
  divideBy: PropTypes.oneOf([2, 3, 4]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  spacing: PropTypes.oneOf(['base', 'small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Grid.defaultProps = {
  element: 'div',
};

Grid.Column = Column;

export { Grid };
