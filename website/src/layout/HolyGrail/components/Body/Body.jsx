import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from '../../HolyGrail.module.scss';

const Body = ({ element, spacing, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(
    styles.body,
    spacing && styles[spacing],
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Body.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(['base', 'small', 'medium', 'large']),
};

Body.defaultProps = {
  element: 'div',
  className: '',
  spacing: '',
};

export { Body };
