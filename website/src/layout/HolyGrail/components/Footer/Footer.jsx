import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Footer = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Footer.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Footer.defaultProps = {
  element: 'footer',
  className: '',
};

export { Footer };
