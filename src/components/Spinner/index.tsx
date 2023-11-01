import classes from './styles.module.css'

export const Spinner: React.FC = () => {
  return <div className={`${classes.spinner} animate-spin`}></div>
}
