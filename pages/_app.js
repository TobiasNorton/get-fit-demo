import styles from '../styles/app.module.scss'
import Navigation from '../components/navigation'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <div className={styles.app}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <div className="mainContainer">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
