import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../../HolyGrail.module.scss';

const Footer = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.footer, className);

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
};

export { Footer };
