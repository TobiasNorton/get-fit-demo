import Link from 'next/link'
import styles from '../styles/navigation.module.scss'

const Navigation = () => {
  return (
    <div className="container">
      <div className="left-section">
        <Link href="/">
          <a>GetFit</a>
        </Link>
      </div>
      <div className="right-section">
        <Link href={''}>
          <a>Workout</a>
        </Link>
        <Link href={''}>
          <a>Progress</a>
        </Link>
        <Link href={''}>
          <a>Routines</a>
        </Link>
      </div>

      <style jsx>
        {`
          .container {
            width: full;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          a {
            text-decoration: none;
            color: black;
            margin: 10px;
          }

          .right-section {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  )
}

export default Navigation
