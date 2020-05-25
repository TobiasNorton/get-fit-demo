import { useState, useEffect } from 'react'
import * as ReferralModal from 'react-modal'
// import styles from '../styles/app.module.scss'
import Navigation from '../components/navigation'
import Head from 'next/head'

ReferralModal.setAppElement('#__next')

const App = ({ Component, pageProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="app">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <div className="main-container">
        <Component {...pageProps} />
      </div>
      <ReferralModal isOpen={isModalOpen}>
        <div className="referral-modal-contents">
          <h2>Refer a friend now and start earning rewards!</h2>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </ReferralModal>
      <button onClick={() => setIsModalOpen(true)}>Click Me</button>

      <style jsx>{`
        .app {
          font-family: 'Poppins', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: full;
        }

        .referral-modal {
          // position: absolute;
          // top: 40px;
          // left: 40px;
          // right: 40px;
          // bottom: 40px;
          // border: 1px solid rgb(204, 204, 204);
          // background: rgb(255, 255, 255);
          // overflow: auto;
          // border-radius: 4px;
          // outline: none;
          // padding: 20px;
          background-color: red;
        }
        .referral-modal-contents {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 94%;
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default App
