import Modal from 'react-modal'
import { Formik, Field } from 'formik'
import cx from 'classnames'
import referrals from '../referrals.json'

Modal.setAppElement('#__next')

const ReferralModal = ({ isOpen, onRequestClose }) => {
  console.log('referrals', referrals)

  return (
    <div>
      <Modal isOpen={isOpen}>
        <div className="referral-modal-contents">
          <button className="close-modal" onClick={() => onRequestClose()}>
            X
          </button>
          <h2>Refer a friend now and start earning!</h2>
          <p className="caption">
            Enter a friend's first name and email and we'll send them an invitation to sign up.
          </p>
          <div>
            {/* Assumes the user is registered and logged in*/}
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
                          style={{ fontSize: '14px', height: '18px' }}
                        ></Field>
                      </div>
                      <div>
                        <label className="email-label" htmlFor="email">
                          Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          style={{ fontSize: '14px', height: '18px' }}
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
                <thead>
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
                </thead>
                <tbody>
                  {referrals &&
                    referrals.map((referral, index) => {
                      return (
                        <tr className="referral" key={`referral-${index}`}>
                          <td>{referral.name}</td>
                          <td>
                            <p>
                              Referred
                              <br />
                              <span>{`${referral.daysAgo} days ago`}</span>
                            </p>
                          </td>
                          <td
                            className={cx({
                              stagePurchased: referral.stage === 'Device Purchased',
                              stageSubscribed: referral.stage === 'Subscribed!',
                            })}
                          >
                            {referral.stage}
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>

      <style jsx>
        {`

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
      font-size: 64px;
      margin: 0;
    }

    .referral p {
      margin: 0;
    }

    .referral p span {
      font-size: 12px;
    }

    .stagePurchased {
      color: hsl(33, 90%, 52%);
    }

    .stageSubscribed {
      color: hsl(145, 65%, 45%);
    }
  `}
      </style>
    </div>
  )
}

export default ReferralModal
