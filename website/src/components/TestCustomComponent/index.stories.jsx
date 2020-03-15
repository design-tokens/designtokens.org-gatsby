import React from 'react';
import { TestCustomComponent } from './TestCustomComponent';

export default {
  title: 'Components|TestCustomComponent',
  component: TestCustomComponent,
};

export const simple = () => (
  <TestCustomComponent>Some test here</TestCustomComponent>
);
