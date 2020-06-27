import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Header, Body, Navigation, Content, Aside, Footer } from './components';
import styles from './HolyGrail.module.scss';

const HolyGrail = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(styles.wrapper, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

HolyGrail.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HolyGrail.defaultProps = {
  element: 'div',
};

HolyGrail.Header = Header;
HolyGrail.Body = Body;
HolyGrail.Navigation = Navigation;
HolyGrail.Content = Content;
HolyGrail.Aside = Aside;
HolyGrail.Footer = Footer;

export { HolyGrail };
