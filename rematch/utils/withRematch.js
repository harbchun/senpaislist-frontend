import React from 'react'
import { connect, Provider } from 'react-redux'

const __NEXT_REMATCH_STORE__ = '__NEXT_REMATCH_STORE__'

// https://github.com/iliakan/detect-node
const checkServer = () =>
  Object.prototype.toString.call(global.process) === '[object process]'

const getOrCreateStore = (initStore, initialState) => {
  // Always make a new store if server
  if (checkServer() || typeof window === 'undefined') {
    return initStore(initialState)
  }

  // Memoize store in global variable if client
  if (!window[__NEXT_REMATCH_STORE__]) {
    window[__NEXT_REMATCH_STORE__] = initStore(initialState)
  }
  return window[__NEXT_REMATCH_STORE__]
}

const withRematch = (...args) => Component => {
  // First argument is initStore, the rest are redux connect arguments and get passed
  const [initStore, ...connectArgs] = args
  // Connect page to redux with connect arguments
  const ConnectedComponent = connect.apply(null, connectArgs)(Component)

  const ComponentWithRematch = (props = {}) => {
    const { store, initialProps, initialState, ...others } = props

    // Wrap with redux Provider with store
    // Create connected page with initialProps
    return React.createElement(
      Provider,
      {
        store:
          store && store.dispatch
            ? store
            : getOrCreateStore(initStore, initialState)
      },
      React.createElement(ConnectedComponent, { ...initialProps, ...others })
    )
  }

  ComponentWithRematch.getInitialProps = async (props = {}) => {
    const isServer = checkServer()
    const store = getOrCreateStore(initStore)
    // Run page getInitialProps with store and isServer
    const initialProps = Component.getInitialProps
      ? await Component.getInitialProps({ ...props, isServer, store })
      : {}
    // this is needed for the translation with next
    const { namespacesRequired } = initialProps
    const data = {
      store,
      initialState: store.getState(),
      initialProps,
      namespacesRequired
    }

    return data
  }

  return ComponentWithRematch
}

export default withRematch
