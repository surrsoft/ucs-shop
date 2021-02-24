// see https://apollo.vuejs.org/guide/installation.html#visual-studio-code

import { CST_BACKEND_URL } from './utils/consts';

export const client = {
  service: {
    name: 'my-app',
    // URL to the GraphQL API
    url: `${CST_BACKEND_URL}/graphql`,
  },
  // Files processed by the extension
  includes: [
    'src/**/*.vue',
    'src/**/*.js',
  ],
};
