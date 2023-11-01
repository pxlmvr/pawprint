import classes from './styles.module.css'

type Props = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick: VoidFunction
}

export const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${classes.button}`}
    >
      {children}
    </button>
  )
}
