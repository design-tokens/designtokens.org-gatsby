import React from 'react';
import { CodeBlock } from '.';

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
};

export const base = () => (
  <CodeBlock className="scss">{'.Test { color: blue; }'}</CodeBlock>
);

export const render = () => (
  <CodeBlock render>
    {`
<div
style={{
  backgroundColor: 'rebeccapurple',
  padding: '1em',
  color: 'white',
}}
>
Some code that is being rendered.
</div>
`}
  </CodeBlock>
);

export const live = () => (
  <CodeBlock live>{`<div style={{ backgroundColor: 'gold', padding: '1em' }} />
`}</CodeBlock>
);
