"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require("axios");

module.exports = {
  afterCreate: async (entry) => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
        // hopefully this just works...
      });
  },
  afterUpdate: async (entry) => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
        // hopefully this just works...
      });
  },
  afterDestroy: async (entry) => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
        // hopefully this just works...
      });
  },
};
