module.exports = {
    distDir: 'build',
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': __dirname,
      }

      return config
    },
}
