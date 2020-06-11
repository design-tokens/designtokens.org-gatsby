import React from 'react';
import { CodeBlock } from '.';

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
};

export const simple = () => (
  <CodeBlock className="scss">{'.Test { color: blue; }'}</CodeBlock>
);

export const render = () => (
  <CodeBlock render="true">
    {`
<div
style={{
  backgroundColor: 'rebeccapurple',
  padding: '.75rem 1rem',
  color: 'white',
}}
>
Some code that is being rendered (not sure why one would use that)
</div>
`}
  </CodeBlock>
);

export const live = () => (
  <CodeBlock live="true">{`<div style={{ backgroundColor: 'gold', padding: '.75rem 1rem' }} />
`}</CodeBlock>
);
