import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

let apolloClient = null

function createInstance() {
    // create an apollo link instance, a network interface for apollo client
    const link = new HttpLink({
        uri: (typeof window !== 'undefined' ? process.env.GRAPHQL_API_URL : process.env.BACKEND_API_URL),
    })

    // create an inmemory cache instance for caching graphql data
    const cache = new InMemoryCache()

    const client = new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link,
        cache
    })

    return client
}

function initApollo() {
    if (!apolloClient) apolloClient = createInstance()

    return apolloClient
}

export default initApollo
