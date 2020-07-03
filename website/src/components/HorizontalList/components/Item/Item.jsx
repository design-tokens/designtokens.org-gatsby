import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Item.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Item.defaultProps = {
  element: 'li',
  className: '',
};

export { Item };
