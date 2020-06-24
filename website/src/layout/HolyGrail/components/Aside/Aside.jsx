import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from '../../HolyGrail.module.scss';

const Aside = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.aside, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Aside.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Aside.defaultProps = {
  element: 'aside',
  className: '',
};

export { Aside };
