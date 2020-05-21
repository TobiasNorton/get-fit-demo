import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <title>Get Fit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-home-section">
        <h1 className="title">Welcome to GetFit</h1>
        <div>
          <Link href="/workout">
            <a>Create a Workout</a>
          </Link>
          <Link href="/workout">
            <a>View Progress</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .title {
            margin-top: 140px;
          }

          .home-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .main-home-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          a {
            display: inline-block;
            text-align: center;
            text-decoration: none;
            padding: 10px 18px;
            margin: 20px;
            width: 180px;
            background-color: black;
            color: white;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  )
}
