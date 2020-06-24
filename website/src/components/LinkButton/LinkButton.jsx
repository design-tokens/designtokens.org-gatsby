import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as styles from './LinkButton.module.scss';

const LinkButton = ({ element, className, children, href, to, ...rest }) => {
  const Element = element;
  const ClassNames = `${styles.wrapper} ${className}`;

  if (to !== '') {
    return (
      <Link className={ClassNames} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  if (href !== '') {
    return (
      <a className={ClassNames} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Element className={ClassNames} {...rest}>
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
};

LinkButton.defaultProps = {
  element: 'span',
  className: '',
  to: '',
  href: '',
};

export { LinkButton };
