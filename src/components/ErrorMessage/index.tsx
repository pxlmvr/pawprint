import classes from './styles.module.css'

type Props = {
  message: string
}

export const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div role="alert" className={classes.wrapper}>
    <p className={classes.errorMessage}>{message}</p>
  </div>
)
