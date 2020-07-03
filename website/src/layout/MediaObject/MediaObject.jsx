import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Figure, Body } from './components';
import styles from './MediaObject.module.scss';

const MediaObject = ({
  element,
  alignItems,
  spacing,
  children,
  className,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    alignItems && styles[`wrapper${alignItems}`],
    spacing && styles[spacing],
    className,
  );

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

MediaObject.propTypes = {
  element: PropTypes.string,
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  spacing: PropTypes.oneOf(['base', 'small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MediaObject.defaultProps = {
  element: 'div',
  alignItems: '',
  spacing: '',
  className: '',
};

MediaObject.Figure = Figure;
MediaObject.Body = Body;

export { MediaObject };
