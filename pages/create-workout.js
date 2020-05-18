import Link from 'next/link'
import styles from '../styles/create-workout.module.scss'

const CreateWorkout = () => {
  return (
    <div className={styles.container}>
      <h1>Create A Workout</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  )
}

export default CreateWorkout
