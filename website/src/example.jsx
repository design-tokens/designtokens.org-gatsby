import React from 'react';
import PropTypes from 'prop-types';
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
  return (
    <Element
      className={`${box === true ? 'example-box' : ''} ${
        square === true ? 'example-box--square' : ''
      } ${stretch === true ? 'example-box--stretch' : ''} ${className}`}
    >
      {heading !== '' ? <Heading level={4}>{heading}</Heading> : ''}

      {text}
    </Element>
  );
};

Example.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  heading: PropTypes.string,
  box: PropTypes.bool,
  square: PropTypes.bool,
  stretch: PropTypes.bool,
};

Example.defaultProps = {
  element: 'span',
  className: '',
  text: '',
  heading: '',
  box: true,
  square: false,
  stretch: false,
};

export { Example };
