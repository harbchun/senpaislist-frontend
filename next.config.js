const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    }

    return config
  },
  env: (() => {
    const APP_ENV = process.env.APP_ENV
    let variables = {}
    switch (APP_ENV) {
      case 'production':
        console.log('Using production environment!')
        variables = {
          APP_ENV: 'production',
          GRAPHQL_API_URL: 'https://senpaislist.com/v1/graphql',
        }
        break
      case 'development':
        console.log('Using development environment!')
        variables = {
          APP_ENV: 'development',
          GRAPHQL_API_URL: 'http://localhost:8080/v1/graphql',
        }
        break
      default:
        console.error('No APP_ENV defined. Running without env variables')
    }
    return variables
  })(),
}

module.exports = {
  ...nextConfig
}
