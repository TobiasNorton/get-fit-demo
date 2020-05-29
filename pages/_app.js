import { useState, useEffect } from 'react'
// import * as ReferralModal from 'react-modal'
import ReferralModal from '../components/referral-modal'
import { Formik, Field } from 'formik'
// import styles from '../styles/app.module.scss'
import Navigation from '../components/navigation'
import Head from 'next/head'

// ReferralModal.setAppElement('#__next')

const App = ({ Component, pageProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const wtf = () => {
    setIsModalOpen(true)
    console.log(isModalOpen ? 'Open!' : 'Not...open...')
    console.log('isModalOpen', isModalOpen)
  }
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

      <ReferralModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />

      {/* <ReferralModal isOpen={isModalOpen}>
        <div className="referral-modal-contents">
          <button className="close-modal" onClick={() => setIsModalOpen(false)}>
            X
          </button>
          <h2>Refer a friend now and start earning!</h2>
          <p className="caption">
            Enter a friend's first name and email and we'll send them an invitation to sign up.
          </p>
          <div>
            <Formik initialValues={{ friendsEmail: '', firstName: '' }} onSubmit={''}>
              {({ status, isSubmitting }) => {
                return (
                  <form>
                    <div className="referral-fields-container">
                      <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field
                          type="text"
                          name="firstName"
                          style={{ 'font-size': '14px', height: '18px' }}
                        ></Field>
                      </div>
                      <div>
                        <label className="email-label" htmlFor="email">
                          Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          style={{ 'font-size': '14px', height: '18px' }}
                        ></Field>
                      </div>
                    </div>
                    <button className="submit" type="submit" disabled={isSubmitting}>
                      Send Invite
                    </button>
                    {status && status.error ? <p>{status.error}</p> : null}
                  </form>
                )
              }}
            </Formik>
            <div className="rewards-dash">
              <p className="rewards-dash-head">Rewards Dashboard</p>
              <table className="referral-list">
                <tr className="referral-list-head">
                  <th>
                    <p className="header-number">10</p>
                    <p>Friends Referred</p>
                  </th>
                  <th>
                    <p className="header-number">8</p>
                    <p>Rewards Earned</p>
                  </th>
                  <th>
                    <p className="header-number">4</p>
                    <p>Rewards Pending</p>
                  </th>
                </tr>
                <tr className="referral">
                  <td>Hector</td>
                  <td>
                    <p>Referred</p>
                    <p>5 days ago</p>
                  </td>
                  <td>Last</td>
                </tr>
                <tr className="referral">
                  <td>Hector</td>
                  <td>
                    <p>Referred</p>
                    <p>5 days ago</p>
                  </td>
                  <td>Last</td>
                </tr>
                <tr className="referral">
                  <td>Hector</td>
                  <td>
                    <p>
                      Referred
                      <br />
                      <span></span>5 days ago
                    </p>
                  </td>
                  <td>Last</td>
                </tr>
                <tr className="referral">
                  <td>Hector</td>
                  <td>
                    <p>Referred</p>
                    <p>5 days ago</p>
                  </td>
                  <td>Last</td>
                </tr>
                <tr className="referral">
                  <td>Hector</td>
                  <td>
                    <p>Referred</p>
                    <p>5 days ago</p>
                  </td>
                  <td>Last</td>
                </tr>
                <tr className="referral">
                  <td>Hector</td>
                  <td>
                    <p>Referred</p>
                    <p>5 days ago</p>
                  </td>
                  <td>Last</td>
                </tr>
                <tr className="referral">
                  <td>Hector</td>
                  <td>
                    <p>Referred</p>
                    <p>5 days ago</p>
                  </td>
                  <td>Last</td>
                </tr>
                <tr className="referral">
                  <td>Hector</td>
                  <td>
                    <p>Referred</p>
                    <p>5 days ago</p>
                  </td>
                  <td>Last</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </ReferralModal> */}
      <button className="referral-button" onClick={() => setIsModalOpen(true)}>
        Refer and Earn
      </button>

      <style jsx>{`
        .app {
          font-family: 'Poppins', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: full;
        }

        .referral-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
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
        }

        .referral-modal-contents {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 94%;
          font-family: 'Poppins', sans-serif;
          margin: auto;
        }

        .close-modal {
          display: block;
          position: fixed;
          right: 45px;
          margin-right: 20px;
          z-index: 100;
        }

        h2 {
          margin-top: 100px;
          text-align: center;
        }

        .caption {
          margin: 0 0 40px 0;
          text-align: center;
        }
        
        form {
          font-family: 'Poppins', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: wrap;
          max-width: 800px;
        }
        
        .referral-fields-container {
          display: flex;
          flex-direction: column
          align-items: center;
        }
        
        label {
          margin-right: 10px;
        }
        
        .email-label {
          margin-left: 20px;
        }
        
        .submit {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          padding: 10px;
          margin: 20px 0;
          width: 100%;
          border: none;
          background-color: #00bfe2;
          color: white;
        }

        .rewards-dash-head {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          padding-top: 20px;
          margin-top: 0;
          border-top: 1px solid hsl(191, 0%, 80%);
        }

        .referral-list-head p {
          margin-top: 0;
        }

        table {
          border: 1px solid light-grey;
          width: 100%;
        }

        .header-number {
          color: #00bfe2;
          font-size: 50px;
          margin: 0;
        }

        .referral p {
          margin: 0;
        }

        .referral p span {
          font-size: 10px;
        }

      `}</style>
    </div>
  )
}

export default App
