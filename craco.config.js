const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/bosons/_colors.scss',
          './src/bosons/_typography.scss',
          './src/quarks/Button.scss'
        ],
      },
    },
  ],
}