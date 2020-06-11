import React from 'react';
import { Button } from '.';
import { HorizontalList } from '../../layout/HorizontalList';
import { HorizontalListItem } from '../../layout/HorizontalList/Item';

export default {
  title: 'Components/Button',
  component: Button,
};

export const button = () => (
  <HorizontalList spacing="medium">
    <HorizontalListItem>
      <Button type="button">Button</Button>
    </HorizontalListItem>

    <HorizontalListItem>
      <Button type="button" className="sg-is-hover">
        Hover
      </Button>
    </HorizontalListItem>

    <HorizontalListItem>
      <Button type="button" className="sg-is-focus">
        Focus
      </Button>
    </HorizontalListItem>

    <HorizontalListItem>
      <Button type="button" className="sg-is-active">
        Active
      </Button>
    </HorizontalListItem>
  </HorizontalList>
);
