import React from 'react';
import { AssistiveText } from '.';

export default {
  title: 'Utilities/AssistiveText',
  component: AssistiveText,
};

export const base = () => (
  <>
    Assistive text: <AssistiveText>Assistive Text</AssistiveText>
  </>
);

export const focusable = () => (
  <>
    Focusable assistive text:{' '}
    <AssistiveText element="a" href="#" focusable>
      Focusable Assistive Text
    </AssistiveText>
  </>
);
