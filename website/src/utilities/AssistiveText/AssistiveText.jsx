import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './AssistiveText.module.scss';

const AssistiveText = ({
  element,
  className,
  children,
  focusable,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    focusable && styles.focusable,
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

AssistiveText.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  focusable: PropTypes.bool,
};

AssistiveText.defaultProps = {
  element: 'span',
  className: '',
  focusable: false,
};

export { AssistiveText };
