import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      {/* <Component {...pageProps} /> */}
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </Provider>
  )
}

export default MyApp
