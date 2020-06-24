import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './AssistiveText.module.scss';

const AssistiveText = ({
  element,
  className,
  children,
  focusable,
  ...rest
}) => {
  const Element = element;

  return (
    <Element
      className={`${styles.wrapper} ${
        focusable === true ? styles.focusable : ''
      } ${className}`}
      {...rest}
    >
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
