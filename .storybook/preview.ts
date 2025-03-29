import type { Preview } from "@storybook/react";
import '../src/styles/colors.css';
import '../src/styles/fonts.css';
import '../src/components/Button/Button.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview; 