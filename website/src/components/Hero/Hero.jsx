import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../Heading';
import * as styles from './Hero.module.scss';

const Hero = ({ className, children, heading, description, ...rest }) => {
  return (
    <section className={`${styles.wrapper} ${className}`} {...rest}>
      {heading !== '' ? <Heading level={1}>{heading}</Heading> : ''}

      {description !== '' ? <Heading level={2}>{description}</Heading> : ''}

      {children}
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  description: PropTypes.string,
};

Hero.defaultProps = {
  className: '',
  heading: '',
  description: '',
};

export { Hero };
