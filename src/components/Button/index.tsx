import classes from './styles.module.css'

type Props = {
  children: React.ReactNode
  onClick: VoidFunction
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  )
}
