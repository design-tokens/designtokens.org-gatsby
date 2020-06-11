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
  const Element = element !== '' ? element : 'span';
  const ClassNames = className !== '' ? ` ${className}` : '';
  const Focusable = focusable === true ? ` ${styles.focusable}` : '';

  return (
    <Element className={`${styles.wrapper}${Focusable}${ClassNames}`} {...rest}>
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
