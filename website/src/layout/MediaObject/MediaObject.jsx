import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Figure, Body } from './components';

import styles from './MediaObject.module.scss';

const MediaObject = ({
  element,
  children,
  className,
  reverse,
  alignItems,
  spacing,
  ...rest
}) => {
  const Element = element;
  const classes = classNames(
    styles.wrapper,
    spacing && styles[spacing],
    reverse && styles.reverse,
    alignItems && styles[`wrapper${alignItems}`],
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
  reverse: PropTypes.bool,
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
  className: '',
  reverse: false,
  alignItems: '',
  spacing: '',
};

MediaObject.Figure = Figure;
MediaObject.Body = Body;

export { MediaObject };
