const { mergeConfig } = require('vite');
// import type { StorybookViteConfig } from '@storybook/builder-vite';
module.exports = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    'storybook-addon-designs'
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
     },
  async viteFinal(config, { configType }) { 
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      // optimizeDeps: {
      //   include: ['storybook-dark-mode'],
      // },
    });
  },
  typescript: {
    reactDocgen: false,
  }
}

