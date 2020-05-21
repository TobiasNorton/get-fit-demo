import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/workout.module.scss'

const Workout = () => {
  // const [data, setData] = useState()
  const [chooseExerciseIsOpen, setChooseExerciseIsOpen] = useState(false)

  // useEffect(() => {
  //   console.log('lol fuck')
  //   fetch('../data.json').then((response) => console.log(response))
  // }, [])

  useEffect(() => {})

  return (
    <div>
      <div className="container">
        <h3>Start A Workout</h3>
        <p className="no-exercises">You currently have no exercises.</p>
        <button onClick={() => setChooseExerciseIsOpen(!chooseExerciseIsOpen)}>
          Choose Exercise from List
        </button>
        {chooseExerciseIsOpen && (
          <section>
            <div>Rows</div>
            <div>Lat Pull-downs</div>
            <div>Push-ups</div>
            <div>Sit-ups</div>
            <div>Squats</div>
            <div>Curls</div>
            <div>Tricep Curls</div>
          </section>
        )}

        <i className="far fa-angle-down"></i>
        <div>Add Custom</div>
        <Link href="/">
          <a className="back-to-home">&larr; Back to home</a>
        </Link>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a {
          text-decoration: none;
        }

        h3 {
          margin: 60px 60px 20px 60px;
        }

        .no-exercises {
          color: grey;
        }

        .back-to-home {
          margin-top: 100px;
        }
      `}</style>
    </div>
  )
}

export default Workout

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {}

  // The value of the `props` key will be
  //  passed to the `Workout` component
  return {
    props: {},
  }
}
