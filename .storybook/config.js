import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const loadStories = () => {
  require('./stories/buttons');
};

configure(loadStories(), module);
