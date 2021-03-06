import { addParameters, configure } from '@storybook/react';
import buildingBlocksTheme from './buildingBlocksTheme';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: buildingBlocksTheme,
  },
});

configure(loadStories, module);
