import classes from './styles.module.css'

type Props = {
  url: string
}

export const Image: React.FC<Props> = ({ url }) => {
  return (
    <figure>
      <img className={classes.image} src={url}></img>
    </figure>
  )
}
