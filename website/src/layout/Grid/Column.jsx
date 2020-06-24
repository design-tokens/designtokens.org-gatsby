import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Grid.module.scss';

const GridColumn = ({ element, className, children, autoSize, ...rest }) => {
  const Element = element;

  return (
    <Element
      className={` ${
        autoSize === true ? styles['auto-size'] : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </Element>
  );
};

GridColumn.propTypes = {
  element: PropTypes.string,
  autoSize: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

GridColumn.defaultProps = {
  element: 'div',
  autoSize: false,
  className: '',
};

export { GridColumn };
