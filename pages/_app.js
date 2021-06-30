/* eslint-disable */
import { Provider } from 'react-redux'
import { useStore } from '~/rematch/store'
import PropTypes from 'prop-types'

import '~/styles/reset.css'

function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    pageProps: PropTypes.shape({}).isRequired
}

export default MyApp
