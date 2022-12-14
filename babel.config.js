module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
      "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            helpers: "helpers",
            hook: "hook",
            assets: "assets",
            navigation: "navigation",
          },
        },
      ]
    ,
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }]
    ],
  };
};
