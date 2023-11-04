import classes from './styles.module.css'

export const Spinner: React.FC = () => {
  return (
    <div
      data-testid="spinner"
      className={`${classes.spinner} animate-spin`}
    ></div>
  )
}
