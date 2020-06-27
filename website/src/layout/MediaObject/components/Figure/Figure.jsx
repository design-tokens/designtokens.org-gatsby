import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../../MediaObject.module.scss';

const Figure = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.figure, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Figure.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Figure.defaultProps = {
  element: 'div',
};

export { Figure };
