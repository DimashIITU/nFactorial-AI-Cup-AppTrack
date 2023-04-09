import React from 'react';
import { Loader, Image, Segment } from 'semantic-ui-react';

export const LoaderE = () => (
  <Segment>
    <Loader active />
    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);
