import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Header = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Header.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  element: 'header',
  className: '',
};

export { Header };
