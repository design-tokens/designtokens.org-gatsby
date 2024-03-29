import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Heading } from './components/Heading';

const Example = ({
  element,
  className,
  text,
  heading,
  box,
  square,
  stretch,
}) => {
  const Element = element;
  const classes = classNames(
    className,
    box && 'example-box',
    square && 'example-box--square',
    stretch && 'example-box--stretch',
  );

  return (
    <Element className={classes}>
      {heading && <Heading level={4}>{heading}</Heading>}

      {text}
    </Element>
  );
};

Example.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.node,
  heading: PropTypes.node,
  box: PropTypes.bool,
  square: PropTypes.bool,
  stretch: PropTypes.bool,
};

Example.defaultProps = {
  element: 'span',
  className: null,
  heading: null,
  text: null,
  box: true,
  square: false,
  stretch: false,
};

export { Example };
