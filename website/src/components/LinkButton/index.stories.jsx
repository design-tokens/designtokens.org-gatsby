import React from 'react';
import { LinkButton } from '.';
import { HorizontalList } from '../../layout/HorizontalList';
import { HorizontalListItem } from '../../layout/HorizontalList/Item';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
};

export const linkButton = () => (
  <HorizontalList spacing="medium">
    <HorizontalListItem>
      <LinkButton href="#">Button</LinkButton>
    </HorizontalListItem>

    <HorizontalListItem>
      <LinkButton href="#" className="sg-is-hover">
        Hover
      </LinkButton>
    </HorizontalListItem>

    <HorizontalListItem>
      <LinkButton href="#" className="sg-is-focus">
        Focus
      </LinkButton>
    </HorizontalListItem>

    <HorizontalListItem>
      <LinkButton href="#" className="sg-is-active">
        Active
      </LinkButton>
    </HorizontalListItem>
  </HorizontalList>
);
