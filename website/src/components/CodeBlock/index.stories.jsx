import React from 'react';
import { CodeBlock } from '.';

export default {
  title: 'Components|CodeBlock',
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
  padding: '20px',
  marginTop: '20px',
  color: 'white',
}}
>
Some code that is being rendered (not sure why one would use that)
</div>
`}
  </CodeBlock>
);

export const live = () => (
  <CodeBlock render="true">{`<div style={{ backgroundColor: 'tomato', padding: '20px' }} />
`}</CodeBlock>
);
