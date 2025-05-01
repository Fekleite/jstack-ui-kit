import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ]
};

export default preview;
