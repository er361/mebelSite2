/* eslint-disable global-require */
import _ from 'lodash';
import development from './development.js';
const config = {
  development: development,
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  graphql: {
    port: 8000
  }
};

export default _.extend(config, require(`./${config.env}`).default);
