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
          GRAPHQL_API_URL: 'https://senpaislist.com/query',
          BACKEND_API_URL: 'http://backend:5001/query'
        }
        break
      case 'development':
        console.log('Using development environment!')
        variables = {
          APP_ENV: 'development',
          GRAPHQL_API_URL: 'http://localhost:5001/query',
          BACKEND_API_URL: 'http://backend:5001/query'
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
