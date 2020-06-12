// eslint-disable-next-line import/no-extraneous-dependencies
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = function override(config, env) {
  const configWithHotReload = rewireReactHotLoader(config, env);

  if (process.env.NODE_ENV === "development") {
    configWithHotReload.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }

  return configWithHotReload;
};
