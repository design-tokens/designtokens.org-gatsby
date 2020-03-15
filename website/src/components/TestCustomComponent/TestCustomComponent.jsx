import React from 'react';
import PropTypes from 'prop-types';

const TestCustomComponent = ({ children }) => (
  <div>My custom component says: {children}</div>
);

TestCustomComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TestCustomComponent };
