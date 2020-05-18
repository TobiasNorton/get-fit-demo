import styles from '../styles/global.scss'
import Navigation from '../components/navigation'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default App
