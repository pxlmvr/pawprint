import classes from './styles.module.css'

type Props = {
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button className={classes.button}>{children}</button>
}
