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
    builder: "@storybook/builder-webpack5",
     },
  // async viteFinal(config, { configType }) { 
  //   return mergeConfig(config, {
  // //     // Use the same "resolve" configuration as your app
  //     resolve: (await import('../vite.config.js')).default.resolve,
  // //     // Add dependencies to pre-optimizatio
  // //     // optimizeDeps: {
  // //     //   include: ['storybook-dark-mode'],
  //     // },
  //   });
  // },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    if (configType === 'PRODUCTION') { 
      config.base = '/atlas-ds/';
    }
    // Make whatever fine-grained changes you need
   

    // Return the altered config
    return config;
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: false,
    checkOptions: {

    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      }
    }
  },
}

