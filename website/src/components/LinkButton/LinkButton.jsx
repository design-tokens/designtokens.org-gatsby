import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
import styles from './LinkButton.module.scss';

const LinkButton = ({
  element,
  className,
  children,
  primary,
  href,
  to,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    primary && styles.primary,
    className,
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

LinkButton.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
};

LinkButton.defaultProps = {
  element: 'span',
  className: null,
  to: null,
  href: null,
  primary: false,
};

export { LinkButton };
