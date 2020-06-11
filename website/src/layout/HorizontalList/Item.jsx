import React from 'react';
import PropTypes from 'prop-types';

const HorizontalListItem = ({ element, className, children, ...rest }) => {
  const Element = element !== '' ? element : 'li';
  const ClassNames = className !== '' ? ` ${className}` : '';

  return (
    <Element className={ClassNames} {...rest}>
      {children}
    </Element>
  );
};

HorizontalListItem.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HorizontalListItem.defaultProps = {
  element: 'li',
  className: '',
};

export { HorizontalListItem };
