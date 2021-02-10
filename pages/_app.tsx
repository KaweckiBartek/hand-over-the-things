import '../styles/globals.css'
import '../styles/themes/theme.scss';
// import Components from '../components/index';

import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
