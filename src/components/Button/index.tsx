import classes from './styles.module.css'

type Props = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick: VoidFunction
  testId?: string
}

export const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  onClick,
  testId,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${classes.button}`}
      data-testid={testId}
    >
      <div className={classes.content}>{children}</div>
    </button>
  )
}
