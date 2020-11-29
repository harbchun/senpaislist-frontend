import PropTypes from 'prop-types';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    pageProps: PropTypes.shape({}).isRequired
};

export default MyApp;
