import classes from './styles.module.css'

export const ErrorMessage: React.FC = () => (
  <div className={classes.wrapper}>
    <p className={classes.errorMessage}>Something went wrong</p>
  </div>
)
