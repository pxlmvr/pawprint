import classes from './styles.module.css'

export const BackToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={classes.btt}
    >
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.5 7L7 1.5L12.5 7" stroke="#FFF" strokeWidth="2" />
      </svg>
    </button>
  )
}
